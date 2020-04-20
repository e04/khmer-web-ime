import { WordDictionary, WordList } from './interface'
import createWorker from 'workerize-loader!./worker' // eslint-disable-line import/no-webpack-loader-syntax
import * as Worker from './worker'
import { IWordSearcher } from './interface'

const MAX_SUGGEST_COUNT = 10

export class WordSearcher implements IWordSearcher {
    private readonly worker: unknown

    constructor(
        private wordList: WordList,
        private wordDictionary?: WordDictionary
    ) {
        this.worker = createWorker<typeof Worker>()
    }

    async search(targetWord: string): Promise<WordList> {
        // eslint-disable-next-line prefer-const
        let [
            prefixResult,
            similarResult,
            dictionaryResult,
        ] = await Promise.all([
            await this.matchPrefix(targetWord),
            await this.matchSimilar(targetWord),
            await this.matchDictionary(targetWord),
        ])
        prefixResult = prefixResult.slice(0, MAX_SUGGEST_COUNT)
        similarResult = similarResult.slice(
            0,
            MAX_SUGGEST_COUNT - prefixResult.length
        )
        return Array.from(
            new Set([...dictionaryResult, ...prefixResult, ...similarResult])
        )
    }

    private async matchPrefix(targetWord: string): Promise<WordList> {
        return (this.worker as typeof Worker).matchPrefix(
            targetWord,
            this.wordList
        )
    }

    private async matchSimilar(targetWord: string): Promise<WordList> {
        return (this.worker as typeof Worker).matchSimilar(
            targetWord,
            this.wordList
        )
    }

    private async matchDictionary(targetWord: string): Promise<WordList> {
        if (!this.wordDictionary)
            return new Promise((resolve) => {
                resolve([])
            })
        return (this.worker as typeof Worker).matchDictionary(
            targetWord,
            this.wordDictionary
        )
    }
}

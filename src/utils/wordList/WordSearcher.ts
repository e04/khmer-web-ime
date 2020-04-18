import { WordList } from './interface'
import createWorker from 'workerize-loader!./worker' // eslint-disable-line import/no-webpack-loader-syntax
import * as Worker from './worker'

export class WordSearcher {
    private readonly worker: unknown

    constructor(private wordList: WordList) {
        this.worker = createWorker<typeof Worker>()
    }

    async matchPrefix(targetWord: string): Promise<WordList> {
        return (this.worker as typeof Worker).matchPrefix(
            targetWord,
            this.wordList
        )
    }

    async matchSimilar(targetWord: string): Promise<WordList> {
        return (this.worker as typeof Worker).matchSimilar(
            targetWord,
            this.wordList
        )
    }
}

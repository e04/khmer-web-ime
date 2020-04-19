export type WordList = string[]
export type WordDictionary = { [key: string]: WordList }

export interface IWordSearcher {
    search(targetWord: string): Promise<WordList>
}

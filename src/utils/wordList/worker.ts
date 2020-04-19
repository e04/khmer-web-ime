import {WordDictionary, WordList} from './interface'
import {levenshteinDistance} from './levenshtein'

const MAX_DISTANCE = 8

export const matchPrefix = (targetWord: string, wordList: WordList): WordList => {
    return wordList.filter((word: string) => {
        return word.indexOf(targetWord) === 0
    })
}
export const matchSimilar = (targetWord: string, wordList: WordList): WordList => {
    const calculatedList = wordList
        .map((word: string): [string, number] => {
            const distance = levenshteinDistance(word, targetWord)
            return [word, distance]
        })
        .filter((item) => {
            return item[1] <= MAX_DISTANCE
        })
    calculatedList.sort((a: [string, number], b: [string, number]) => {
        return a[1] - b[1]
    })
    return calculatedList.map((item) => item[0])
}
export const matchDictionary = (targetWord: string, wordList: WordDictionary): WordList => {
    if (targetWord in wordList) return wordList[targetWord]
    return  Object.entries(wordList).filter(([word, _]: [string, WordList]) => {
        return word.indexOf(targetWord) === 0
    }).flatMap(([_, list]: [string, WordList]) => {
        return list
    })
}

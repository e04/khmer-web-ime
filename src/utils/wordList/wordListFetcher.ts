import { WordList } from './interface'

export const wordListFetcher: (path: string) => () => WordList = (
    path: string
): (() => WordList) => {
    let cache: WordList | null = null
    let isLoading = false
    return (): WordList => {
        if (!isLoading) {
            isLoading = true
            fetch(path)
                .then((data) => data.json())
                .then((json) => (cache = json))
            return []
        }
        if (cache == null) return []
        return cache
    }
}

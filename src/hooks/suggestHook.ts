import { useCallback, useEffect, useState } from 'react'
import { WordList } from '../utils/wordList/interface'
import { languageService } from '../utils/languages/khmer/service'

const useSuggest = (
    onWordSelected: (word: string) => void,
    onControlKeyDown: (e: KeyboardEvent) => void
): [string, WordList, number, (index: number) => void] => {
    const [inputText, setInputText] = useState('')
    const [suggestWords, setSuggestWord] = useState<WordList>([])
    const [selectWordIndex, setSelectWordIndex] = useState(-1)

    const enterSuggest = useCallback(
        (index: number) => {
            let targetWordIndex: number
            if (index == null) {
                targetWordIndex = selectWordIndex
            } else {
                targetWordIndex = index
            }
            setTimeout(() => {
                onWordSelected(suggestWords[targetWordIndex])
                setInputText('')
                setSuggestWord([])
                setSelectWordIndex(-1)
            }, 0)
        },
        [onWordSelected, selectWordIndex, suggestWords]
    )

    const search = useCallback(async (word: string) => {
        setSuggestWord(await languageService.wordSearcher.search(word))
        setSelectWordIndex(-1)
    }, [])

    const onDocumentKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.metaKey || e.ctrlKey) {
                if (e.key === 'z') {
                    onControlKeyDown(e)
                }
                return
            }
            switch (e.key) {
                case 'Enter': {
                    let selectedWord: string
                    if (selectWordIndex === -1) {
                        selectedWord = inputText
                    } else {
                        selectedWord = suggestWords[selectWordIndex]
                    }
                    if (selectedWord === '') selectedWord = '\n'
                    onWordSelected(selectedWord)
                    setInputText('')
                    setSuggestWord([])
                    setSelectWordIndex(-1)
                    break
                }
                case 'Backspace': {
                    const newText = inputText.slice(0, -1)
                    setInputText(newText)
                    if (inputText === '') {
                        onControlKeyDown(e)
                        break
                    }
                    if (inputText.length === 1) {
                        setSuggestWord([])
                        setSelectWordIndex(-1)
                        break
                    }
                    search(newText)
                    break
                }
                case 'ArrowLeft':
                case 'ArrowRight':
                    onControlKeyDown(e)
                    break
                case 'Tab':
                case 'ArrowDown':
                    if (selectWordIndex < suggestWords.length - 1) {
                        setSelectWordIndex(selectWordIndex + 1)
                    }
                    break
                case 'ArrowUp':
                    if (selectWordIndex > 0) {
                        setSelectWordIndex(selectWordIndex - 1)
                    }
                    break
                case 'Escape':
                case 'Control':
                case 'Shift':
                    return
                default: {
                    const newText =
                        inputText + languageService.keyTranslator.translate(e)
                    setInputText(newText)
                    search(newText)
                }
            }
            e.preventDefault()
        },
        [
            inputText,
            onControlKeyDown,
            onWordSelected,
            search,
            selectWordIndex,
            suggestWords,
        ]
    )

    useEffect(() => {
        document.addEventListener('keydown', onDocumentKeyDown)
        return () => {
            document.removeEventListener('keydown', onDocumentKeyDown)
        }
    }, [inputText, onDocumentKeyDown])

    return [inputText, suggestWords, selectWordIndex, enterSuggest]
}

export default useSuggest

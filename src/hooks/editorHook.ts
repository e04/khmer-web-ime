import React, {RefObject, useCallback, useEffect, useState} from 'react'
import getCaretCoordinates from 'textarea-caret'

const LOCAL_STORAGE_SAVE_KEY = 'LOCAL_STORAGE_SAVE_KEY'
const useEditor = (
    $textarea: RefObject<HTMLTextAreaElement>
): [
    string,
    { x: number, y: number },
    (word: string) => void,
    (e: KeyboardEvent) => void,
    () => void,
    () => void
] => {
    const [caretPosition, setCaretPosition] = useState({x: 0, y: 0})
    const [textareaValue, setTextareaValue] = useState('')

    useEffect(() => {
        const textarea = $textarea.current
        const calcCaretPosition = (e: Event) => {
            const textarea = e.target as HTMLTextAreaElement
            const caret = getCaretCoordinates(textarea, textarea.selectionEnd)
            setCaretPosition({x: caret.left, y: caret.top})
        }
        textarea?.addEventListener('input', calcCaretPosition)
        textarea?.addEventListener('click', calcCaretPosition)
        return () => {
            textarea?.removeEventListener('input', calcCaretPosition)
            textarea?.removeEventListener('click', calcCaretPosition)
        }
    }, [$textarea, caretPosition])

    useEffect(() => {
        const saveData: string | null = localStorage.getItem(
            LOCAL_STORAGE_SAVE_KEY
        )
        if (saveData) {
            setTextareaValue(saveData)
        }
    }, [])

    const onWordSelected = useCallback(
        (word: string) => {
            const textarea = $textarea.current
            if (textarea?.selectionStart || textarea?.selectionStart === 0) {
                const start = textarea.selectionStart
                const end = textarea.selectionEnd
                setTextareaValue(
                    textareaValue.substring(0, start) +
                    word +
                    textareaValue.substring(end, textareaValue.length)
                )
                textarea.selectionEnd = end + word.length
            } else {
                setTextareaValue(textareaValue + word)
            }
            textarea?.dispatchEvent(new Event('input'))
            localStorage.setItem(LOCAL_STORAGE_SAVE_KEY, textareaValue)
        },
        [$textarea, textareaValue]
    )

    const backspace = () => {
        const textarea = $textarea.current
        if (textarea?.selectionStart || textarea?.selectionStart === 0) {
            const start = textarea.selectionStart
            const end = textarea.selectionEnd
            setTextareaValue(
                textareaValue.substring(0, start - 1) +
                textareaValue.substring(end, textareaValue.length)
            )
            textarea.selectionEnd = start - 1
        } else {
            setTextareaValue(textareaValue.slice(0, -1))
        }
        textarea?.dispatchEvent(new Event('input'))
    }

    const moveCaret = (direction: 'LEFT' | 'RIGHT') => {
        const textarea = $textarea.current
        if (textarea != null) {
            if (direction === 'LEFT') {
                if (textarea.selectionEnd === 0) return
                textarea.selectionEnd = textarea.selectionEnd - 1
                textarea.selectionStart = textarea.selectionEnd
            }
            if (direction === 'RIGHT') {
                textarea.selectionEnd = textarea.selectionEnd + 1
                textarea.selectionStart = textarea.selectionEnd
            }
            textarea.dispatchEvent(new Event('input'))
        }
    }

    const onControlKeyDown = useCallback(
        (e: KeyboardEvent) => {
            switch (e.code) {
                case 'Backspace':
                    backspace()
                    break
                case 'ArrowLeft':
                    moveCaret('LEFT')
                    break
                case 'ArrowRight':
                    moveCaret('RIGHT')
                    break
            }
        },
        [backspace, moveCaret]
    )

    const deleteAll = useCallback(() => {
        setTextareaValue('')
        setTimeout(() => {
            $textarea.current?.dispatchEvent(new Event('click'))
        }, 0)
    }, [$textarea])

    const copyToClipBoard = useCallback(() => {
        navigator.clipboard.writeText(textareaValue)
    }, [textareaValue])

    return [
        textareaValue,
        caretPosition,
        onWordSelected,
        onControlKeyDown,
        deleteAll,
        copyToClipBoard
    ]
}

export default useEditor

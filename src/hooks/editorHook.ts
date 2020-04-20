import React, { RefObject, useCallback, useEffect, useState } from 'react'
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
    const [caretPosition, setCaretPosition] = useState({ x: 0, y: 0 })
    const [textareaValue, setTextareaValue] = useState('')

    const dispatchFocusTextarea = useCallback(() => {
        setTimeout(() => {
            if ($textarea.current == null) return
            $textarea.current.focus()
        }, 0)
    }, [$textarea])

    const onWordSelected = useCallback(
        (word: string) => {
            const textarea = $textarea.current
            if (textarea == null) return
            const start = textarea.selectionStart
            const end = textarea.selectionEnd
            setTextareaValue(
                textareaValue.substring(0, start) +
                    word +
                    textareaValue.substring(end, textareaValue.length)
            )
            textarea.selectionEnd = end + word.length
            textarea.dispatchEvent(new Event('input'))
            localStorage.setItem(LOCAL_STORAGE_SAVE_KEY, textareaValue)
        },
        [$textarea, textareaValue]
    )

    const backspace = useCallback(() => {
        const textarea = $textarea.current
        if (textarea == null) return
        if (textarea.selectionStart === 0) return
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        setTextareaValue(
            textareaValue.substring(0, start - 1) +
                textareaValue.substring(end, textareaValue.length)
        )
        textarea.selectionEnd = start - 1
        textarea.dispatchEvent(new Event('input'))
    }, [$textarea, textareaValue])

    const moveCaret = useCallback(
        (direction: 'LEFT' | 'RIGHT') => {
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
        },
        [$textarea]
    )

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
            if ($textarea.current == null) return
            $textarea.current.dispatchEvent(new Event('click'))
        }, 0)
    }, [$textarea])

    const copyToClipBoard = useCallback(() => {
        navigator.clipboard.writeText(textareaValue)
    }, [textareaValue])

    useEffect(() => {
        const textarea = $textarea.current
        if (textarea == null) return
        const calcCaretPosition = () => {
            const caret = getCaretCoordinates(textarea, textarea.selectionEnd)
            setCaretPosition({ x: caret.left, y: caret.top })
        }
        textarea.addEventListener('input', calcCaretPosition)
        textarea.addEventListener('click', calcCaretPosition)
        textarea.addEventListener('blur', dispatchFocusTextarea)
        return () => {
            textarea.removeEventListener('input', calcCaretPosition)
            textarea.removeEventListener('click', calcCaretPosition)
            textarea.removeEventListener('blur', dispatchFocusTextarea)
        }
    }, [$textarea, caretPosition, dispatchFocusTextarea])

    useEffect(() => {
        const saveData: string | null = localStorage.getItem(
            LOCAL_STORAGE_SAVE_KEY
        )
        if (saveData) {
            setTextareaValue(saveData)
        }
    }, [])

    return [
        textareaValue,
        caretPosition,
        onWordSelected,
        onControlKeyDown,
        deleteAll,
        copyToClipBoard,
    ]
}

export default useEditor

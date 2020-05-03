import React from 'react'
import { Box, Paper, List } from '@material-ui/core'
import useSuggest from '../hooks/suggestHook'
import { makeStyles } from '@material-ui/styles'
import { lightBlue } from '@material-ui/core/colors'
import SuggestItem from './SuggestItem'

const OFFSET_Y = 29
const OFFSET_X = 33
const SUGGEST_BOX_Y_OFFSET = 45
type Props = {
    x: number
    y: number
    fontSize: string
    onWordSelected: (word: string) => void
    onControlKeyDown: (e: KeyboardEvent) => void
}

const useStyle = makeStyles({
    inputTextBox: {
        color: 'white',
        backgroundColor: lightBlue[800],
        borderRadius: '.25rem',
    },
    caret: {
        animation: '$blink 1s ease 0s infinite',
        opacity: 1,
    },
    '@keyframes blink': {
        '0%': { opacity: 1 },
        '49%': { opacity: 1 },
        '50%': { opacity: 0 },
        '99%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    list: {
        padding: 0,
    },
})

const SuggestBox: React.FC<Props> = (props) => {
    const top = props.y + OFFSET_Y
    const left = props.x + OFFSET_X
    const [inputText, suggestWords, selectWordIndex, enterSuggest] = useSuggest(
        props.onWordSelected,
        props.onControlKeyDown
    )
    const c = useStyle()

    const absolutePosition = {
        position: 'absolute' as 'absolute',
        top,
        left,
    }

    return (
        <>
            <Box
                className={c.caret}
                style={{
                    ...absolutePosition,
                    backgroundColor: 'black',
                    width: '1px',
                    height: '2rem',
                }}
            />
            <Box
                style={{
                    ...absolutePosition,
                    fontSize: props.fontSize,
                }}
            >
                <Box className={c.inputTextBox} mb={1} pb={1}>
                    {inputText}
                </Box>
            </Box>
            <Paper
                style={{
                    ...absolutePosition,
                    top: top + SUGGEST_BOX_Y_OFFSET,
                }}
            >
                <Box>
                    <List className={c.list}>
                        {suggestWords.map((word, index) => (
                            <SuggestItem
                                key={word}
                                word={word}
                                index={index}
                                enterSuggest={enterSuggest}
                                isSelected={index === selectWordIndex}
                            />
                        ))}
                    </List>
                </Box>
            </Paper>
        </>
    )
}

export default SuggestBox

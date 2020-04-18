import React from 'react'
import {Box, Paper, ListItem, List} from '@material-ui/core'
import useSuggest from '../hooks/suggestHook'
import {makeStyles} from '@material-ui/styles'
import {lightBlue} from '@material-ui/core/colors'
import SuggestItem from './SuggestItem'

const OFFSET_Y = 26
const OFFSET_X = 33

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
        opacity: 0.8,
        borderRadius: '.25rem',
        borderLeft: '1px solid black',
    },
    caret: {
        animation: '$blink 1s ease 0s infinite',
    },
    '@keyframes blink': {
        '0%': {opacity: 0},
        '49%': {opacity: 0},
        '50%': {opacity: 1},
        '99%': {opacity: 1},
        '100%': {opacity: 0},
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
                hidden={false}
            >
                <Box className={c.inputTextBox} mb={1}>
                    {inputText}
                </Box>
            </Box>
            <Paper
                style={{
                    ...absolutePosition,
                    top: top + 35,
                }}
            >
                <Box>
                    <List>
                        {suggestWords.map((word, index) => (
                            <SuggestItem
                                key={word}
                                word={word}
                                onClick={() => {
                                    enterSuggest(index)
                                }}
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

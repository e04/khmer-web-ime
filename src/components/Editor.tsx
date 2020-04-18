import React, {useRef, forwardRef, useImperativeHandle} from 'react'
import { Box, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import SuggestBox from './SuggestBox'
import useEditor from '../hooks/editorHook'
import ToolBar from "./Toolbar";

type Props = {}

const FONT_SIZE = '1.5rem'

const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    textarea: {
        width: '100%',
        height: '100%',
        'font-size': FONT_SIZE,
        border: 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    box: {
        '&, & *': {
            'font-family': `'Hanuman', serif`,
        },
        width: '100%',
        height: '100%',
    }
})

const Editor: React.FC = () => {
    const c = useStyles()
    const $textarea = useRef({} as HTMLTextAreaElement)
    const [
        textareaValue,
        caretPosition,
        onWordSelected,
        onControlKeyDown,
        deleteAll,
    ] = useEditor($textarea)

    return (
        <Paper className={c.root} style={{position: 'relative'}} elevation={10}>
            <Box p={4} className={c.box} style={{position: 'relative'}}>
                <textarea
                    className={c.textarea}
                    style={{resize: 'none'}}
                    ref={$textarea}
                    value={textareaValue}
                    readOnly
                />
                <SuggestBox
                    x={caretPosition.x}
                    y={caretPosition.y}
                    fontSize={FONT_SIZE}
                    onWordSelected={onWordSelected}
                    onControlKeyDown={onControlKeyDown}
                />
            </Box>
            <ToolBar deleteAll={deleteAll}/>
        </Paper>
    )
}

export default Editor

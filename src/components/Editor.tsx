import React, { useRef } from 'react'
import { Box, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SuggestBox from './SuggestBox'
import useEditor from '../hooks/editorHook'
import ToolBar from './Toolbar'

type Props = {
    toggleHelp: () => void
}

const FONT_SIZE = '1.5rem'

const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    textarea: {
        width: '100%',
        height: '100%',
        fontSize: FONT_SIZE,
        overflow: 'hidden',
        border: 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    box: {
        '&, & *': {
            'font-family': `'Arial','Hanuman', serif`,
        },
        width: '100%',
        height: '100%',
    },
})

const Editor = React.memo<Props>((props) => {
    const c = useStyles()
    const $textarea = useRef({} as HTMLTextAreaElement)
    const [
        textareaValue,
        caretPosition,
        onWordSelected,
        onControlKeyDown,
        deleteAll,
        copyToClipBoard,
        undo,
        redo,
    ] = useEditor($textarea)

    return (
        <Paper
            className={c.root}
            style={{ position: 'relative' }}
            elevation={10}
        >
            <Box p={4} className={c.box} style={{ position: 'relative' }}>
                <textarea
                    className={c.textarea}
                    style={{ resize: 'none' }}
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
            <ToolBar
                deleteAll={deleteAll}
                copyToClipBoard={copyToClipBoard}
                onClickHelpButton={props.toggleHelp}
                undo={undo}
                redo={redo}
            />
        </Paper>
    )
})

export default Editor

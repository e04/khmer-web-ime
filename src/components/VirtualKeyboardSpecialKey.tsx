import React from 'react'
import { Typography, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { KEY_SIZE } from './VirtualKeyboardKey'

type Props = {
    keyType: string
    label: string
    code: string
}

const useStyle = makeStyles({
    root: {
        height: KEY_SIZE + 'px',
        width: KEY_SIZE * 2 + 'px',
        cursor: 'default',
        'font-family': `'Arial','Hanuman', serif`,
    },
    button: {
        height: KEY_SIZE + 'px',
        width: KEY_SIZE * 2 + 'px',
        minWidth: 'unset',
        padding: 0,
    },
    latinBox: {
        width: '100%',
        height: '100%',
    },
    latin: {
        fontSize: KEY_SIZE * 0.2 + 'px',
        lineHeight: KEY_SIZE + 'px',
    },
})

const triggerKeyDownEvent = (key: string, code: string) => {
    return (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        const event = new KeyboardEvent('keydown', {
            key,
            code,
        })
        document.dispatchEvent(event)
    }
}

const VirtualKeyboardSpecialKey: React.FC<Props> = (props) => {
    const c = useStyle()

    const triggerKey = triggerKeyDownEvent(props.keyType, props.code)

    return (
        <Paper className={c.root} elevation={3}>
            <Button onClick={triggerKey} className={c.button}>
                <Typography className={c.latin} align="center">
                    {props.label}
                </Typography>
            </Button>
        </Paper>
    )
}

export default VirtualKeyboardSpecialKey

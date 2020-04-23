import React, {useState} from 'react'
import {Box, Typography, Grid, Paper, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {grey} from "@material-ui/core/colors";

export const KEY_SIZE = 50

type Props = {
    keyType: string
    latin: string
    only: string
    shift?: string
}

const useStyle = makeStyles({
    root: {
        height: KEY_SIZE + 'px',
        width: KEY_SIZE + 'px',
        cursor: 'default',
        'font-family': `'Arial','Hanuman', serif`,
    },
    button: {
        height: KEY_SIZE * 0.5 + 'px',
        width: KEY_SIZE + 'px',
        minWidth: 'unset',
        padding: 0,
    },
    label: {
        lineHeight: KEY_SIZE * 0.5 + 'px',
        fontSize: KEY_SIZE * 0.3 + 'px',
    },
    latinBox: {
        width: '100%',
        height: '100%'
    },
    latin: {
        fontSize: KEY_SIZE * 0.8 + 'px',
        color: grey[300],
        lineHeight: KEY_SIZE + 'px'
    }
})

const triggerKeyDownEvent = (code: string, shiftKey: boolean) => {
    return () => {
        const event = new KeyboardEvent('keydown', {
            code,
            shiftKey,
        })
        document.dispatchEvent(event)
    }
}

const VirtualKeyboardKey: React.FC<Props> = (props) => {
    const c = useStyle()

    const triggerOnlyKey = triggerKeyDownEvent(props.keyType, false)
    const triggerShiftKey = triggerKeyDownEvent(props.keyType, true)

    return (
        <Paper className={c.root} elevation={3} style={{position: 'relative'}}>
            <Box className={c.latinBox} style={{position: 'absolute'}}>
                <Typography
                    className={c.latin}
                    align="center"
                >
                    {props.latin}
                </Typography>
            </Box>
            <Grid container justify="space-between">
                <Grid container item justify="space-between">
                    <Button onClick={triggerShiftKey} className={c.button}>
                        <Typography color="secondary" className={c.label}>
                            {props.shift}
                        </Typography>
                    </Button>
                </Grid>
                <Grid container item justify="space-between">
                    <Button onClick={triggerOnlyKey} className={c.button}>
                        <Typography color="primary" className={c.label}>
                            {props.only}
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default VirtualKeyboardKey

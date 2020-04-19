import React, {useState} from "react";
import {Box, Typography, Grid, Paper, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

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
    },
    button: {
        height: KEY_SIZE * 0.5 + 'px',
        width: KEY_SIZE * 0.5 + 'px',
        minWidth: 'unset',
        padding: 0
    },
    label: {
        'font-family': `'Arial','Hanuman', serif`,
        lineHeight: KEY_SIZE * 0.5 + 'px',
        fontSize: KEY_SIZE * 0.3 + 'px'
    },
})

const triggerKeyDownEvent = (code: string, shiftKey: boolean) => {
    return () => {
        const event = new KeyboardEvent("keydown", {
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
        <Paper className={c.root} elevation={3}>
            <Grid container justify="space-between">
                <Grid container item justify="space-between">
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <Button onClick={triggerShiftKey} className={c.button}>
                            <Typography color="secondary" className={c.label}>
                                {props.shift}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container item justify="space-between">
                    <Grid item>
                        <Box style={{paddingLeft: KEY_SIZE * 0.1 + 'px'}}>
                            <Typography color="textSecondary" className={c.label}>
                                {props.latin}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Button onClick={triggerOnlyKey} className={c.button}>
                            <Typography color="primary" className={c.label}>
                                {props.only}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default VirtualKeyboardKey

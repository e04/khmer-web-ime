import React from 'react'
import {Box, Button, Grid, Paper, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import VirtualKeyboard from "./VirtualKeyboard";
import {KEY_SIZE} from "./VirtualKeyboardKey";

const HEIGHT = KEY_SIZE * 6 + 'px'
type Props = {
    toggleHelp: () => void
    show: boolean
}
const useStyles = makeStyles({
    root: {
        height: HEIGHT,
        width: '100vw',
        left: 0,
        transition: 'bottom .5s'
    },
    closeButton: {
        width: '100%',
    },
})

const Help: React.FC<Props> = (props) => {
    const c = useStyles()

    return (
        <Paper className={c.root} elevation={10}
               style={{position: 'fixed', bottom: props.show ? 0 : `-${HEIGHT}`}}>
            <Button className={c.closeButton} size="small" onClick={props.toggleHelp}>
                <ArrowDropDown/>
            </Button>
            <Box p={2}>
                <Grid container justify="center">
                    <Grid item>
                        <VirtualKeyboard/>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justify="center">
                <Grid item>
                    <Box>
                        <Typography>

                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Help

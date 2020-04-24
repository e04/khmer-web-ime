import React from 'react'
import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Link,
    Paper,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import VirtualKeyboard from './VirtualKeyboard'
import { KEY_SIZE } from './VirtualKeyboardKey'
import { FaGithub } from 'react-icons/all'
import MoodIcon from '@material-ui/icons/Mood'
import PrivacyPolicy from './PrivacyPolicy'

const HEIGHT = KEY_SIZE * 7.6 + 'px'
type Props = {
    toggleHelp: () => void
    show: boolean
}
const useStyles = makeStyles({
    root: {
        height: HEIGHT,
        width: '100vw',
        left: 0,
        transition: 'bottom .5s',
    },
    closeButton: {
        width: '100%',
    },
})

const Help: React.FC<Props> = (props) => {
    const c = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Paper
            className={c.root}
            elevation={10}
            style={{ position: 'fixed', bottom: props.show ? 0 : `-${HEIGHT}` }}
        >
            <Button
                className={c.closeButton}
                size="small"
                onClick={props.toggleHelp}
            >
                <ArrowDropDown />
            </Button>
            <Box p={2}>
                <Grid container justify="center">
                    <Grid item>
                        <VirtualKeyboard />
                    </Grid>
                </Grid>
            </Box>
            <Grid container justify="center">
                <Grid item>
                    <Box>
                        <Typography></Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <Chip
                        size="small"
                        variant="outlined"
                        icon={<FaGithub />}
                        label="Github"
                        component="a"
                        href="https://github.com/takutoaoi/khmer-web-ime"
                        clickable
                    />
                </Grid>
                <Grid item>
                    <Chip
                        size="small"
                        variant="outlined"
                        icon={<MoodIcon />}
                        label="Privacy Policy"
                        clickable
                        onClick={handleClickOpen}
                    />
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{'Privacy Policy'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <PrivacyPolicy />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}

export default Help

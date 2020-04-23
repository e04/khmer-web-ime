import React from 'react'
import { Box, Fab, Grid } from '@material-ui/core'
import DeleteForeverRounded from '@material-ui/icons/DeleteForeverRounded'
import AssignmentReturnedRounded from '@material-ui/icons/AssignmentReturnedRounded'
import HelpOutline from '@material-ui/icons/HelpOutline'
import { makeStyles } from '@material-ui/styles'
import UndoIcon from '@material-ui/icons/Undo'
import RedoIcon from '@material-ui/icons/Redo'

type Props = {
    deleteAll: () => void
    copyToClipBoard: () => void
    onClickHelpButton: () => void
    undo: () => void
    redo: () => void
}

const useStyle = makeStyles({
    root: {
        bottom: 0,
        left: 0,
        width: '100%',
    },
})

const ToolBar: React.FC<Props> = (props) => {
    const c = useStyle()
    return (
        <Box p={3} style={{ position: 'absolute' }} className={c.root}>
            <Grid container justify="space-around">
                <Grid item>
                    <Fab
                        color="secondary"
                        variant="extended"
                        onClick={props.deleteAll}
                    >
                        <DeleteForeverRounded />
                        <Box ml={1}>Delete</Box>
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab size="medium" onClick={props.undo}>
                        <UndoIcon />
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab size="medium" onClick={props.onClickHelpButton}>
                        <HelpOutline />
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab size="medium" onClick={props.redo}>
                        <RedoIcon />
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab
                        color="primary"
                        variant="extended"
                        onClick={props.copyToClipBoard}
                    >
                        <AssignmentReturnedRounded />
                        <Box ml={1}>Copy</Box>
                    </Fab>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ToolBar

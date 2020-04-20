import React, { CSSProperties } from 'react'
import { Box, Container, Fab, Grid, Typography } from '@material-ui/core'
import DeleteForeverRounded from '@material-ui/icons/DeleteForeverRounded'
import AssignmentReturnedRounded from '@material-ui/icons/AssignmentReturnedRounded'
import HelpOutline from '@material-ui/icons/HelpOutline'
import { makeStyles } from '@material-ui/styles'

type Props = {
    deleteAll: () => void
    copyToClipBoard: () => void
    onClickHelpButton: () => void
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
                    <Fab size="medium" onClick={props.onClickHelpButton}>
                        <HelpOutline />
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

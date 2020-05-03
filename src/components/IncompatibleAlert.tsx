import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import NotInterestedIcon from '@material-ui/icons/NotInterested'
import ComputerIcon from '@material-ui/icons/Computer'
import CheckIcon from '@material-ui/icons/Check'
import {
    FaChrome,
    FaSafari,
    FaInternetExplorer,
    FaFirefox,
} from 'react-icons/fa'

const faStyle = {
    fontSize: '2rem',
}

const IncompatibleAlert: React.FC = () => {
    return (
        <Box p={4}>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                        Your Browser is Unsupported
                    </Typography>
                    <Typography variant="body1" align="center">
                        Please use the latest version of{' '}
                        <a href="https://www.google.com/chrome/">
                            Google Chrome
                        </a>{' '}
                        or{' '}
                        <a href="https://www.microsoft.com/edge/">
                            Microsoft Edge
                        </a>{' '}
                        on PC.
                    </Typography>
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Grid container item justify="center" xs={2}>
                        <Box p={2}>
                            <Grid item container justify="center">
                                <Grid item>
                                    <ComputerIcon fontSize="large" />
                                </Grid>
                            </Grid>
                            <Grid item container justify="center">
                                <Grid item>
                                    <CheckIcon color="primary" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item justify="center" xs={2}>
                        <Box p={2}>
                            <Grid item container justify="center">
                                <Grid item>
                                    <SmartphoneIcon fontSize="large" />
                                </Grid>
                            </Grid>
                            <Grid item container justify="center">
                                <Grid item>
                                    <NotInterestedIcon color="secondary" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Grid container item justify="center" xs={2}>
                        <Box p={2}>
                            <Grid item container justify="center">
                                <Grid item>
                                    <FaChrome style={faStyle} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="center">
                                <Grid item>
                                    <CheckIcon color="primary" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item justify="center" xs={2}>
                        <Box p={2}>
                            <Grid item container justify="center">
                                <Grid item>
                                    <FaSafari style={faStyle} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="center">
                                <Grid item>
                                    <NotInterestedIcon color="secondary" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item justify="center" xs={2}>
                        <Box p={2}>
                            <Grid item container justify="center">
                                <Grid item>
                                    <FaInternetExplorer style={faStyle} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="center">
                                <Grid item>
                                    <NotInterestedIcon color="secondary" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container item justify="center" xs={2}>
                        <Box p={2}>
                            <Grid item container justify="center">
                                <Grid item>
                                    <FaFirefox style={faStyle} />
                                </Grid>
                            </Grid>
                            <Grid item container justify="center">
                                <Grid item>
                                    <NotInterestedIcon color="secondary" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item justify="center" xs={12}>
                    <Grid item>
                        <Typography>bit.ly/3cv1yeZ</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default IncompatibleAlert

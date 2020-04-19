import React, {useCallback, useRef, useState} from 'react'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import Editor from './components/Editor'
import {Drawer} from '@material-ui/core';
import Help from "./components/Help";

const isChrome = !!navigator.userAgent.match('Chrome')
const isNotAndroid = !navigator.userAgent.match('Android')
const isCompatible = isChrome && isNotAndroid

const App: React.FC = () => {
    const [isOpenHelp, setHelpState] = useState(false)
    const toggleHelp = useCallback(() => {
        setHelpState(!isOpenHelp)
    }, [isOpenHelp])
    return (
        <Container style={{overflow: 'hidden'}}>
            {isCompatible ? (
                <>
                    <Box p={4} style={{width: '100%', height: '100vh'}}>
                        <Editor toggleHelp={toggleHelp}/>
                    </Box>
                    <Help show={isOpenHelp} toggleHelp={toggleHelp}/>
                </>
            ) : (
                <Box>
                    <Typography>
                        This app only works Google Chrome on PC.
                    </Typography>
                </Box>
            )}
        </Container>
    )
}

export default App

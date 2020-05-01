import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React, { useCallback, useState } from 'react'
import { Box, Container } from '@material-ui/core'
import Editor from './components/Editor'
import Help from './components/Help'
import IncompatibleAlert from './components/IncompatibleAlert'
import { isCompatible } from './utils/browserCompatibility'

const App: React.FC = () => {
    const [isOpenHelp, setHelpState] = useState(false)
    const toggleHelp = useCallback(() => {
        setHelpState(!isOpenHelp)
    }, [isOpenHelp])
    return (
        <Container style={{ overflow: 'hidden' }}>
            {isCompatible ? (
                <>
                    <Box p={4} style={{ width: '100%', height: '100vh' }}>
                        <Editor toggleHelp={toggleHelp} />
                    </Box>
                    <Help show={isOpenHelp} toggleHelp={toggleHelp} />
                </>
            ) : (
                <IncompatibleAlert />
            )}
        </Container>
    )
}

export default App

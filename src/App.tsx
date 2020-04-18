import React, {useCallback, useRef} from 'react'
import { Box, Container, Grid} from '@material-ui/core'
import Editor from './components/Editor'

const App: React.FC = () => {
    return (
        <Container>

            <Box p={4} style={{width: '100%', height: '100vh'}}>
                <Editor/>
            </Box>
        </Container>
    )
}

export default App

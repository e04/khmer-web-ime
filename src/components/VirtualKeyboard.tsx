import React from 'react'
import { Box, Grid } from '@material-ui/core'
import VirtualKeyboardKey from './VirtualKeyboardKey'
import { keyMap } from '../utils/languages/khmer/keyMap'

const keyList = [
    [
        { key: 'Backquote', display: '`' },
        { key: 'Digit1', display: '1' },
        { key: 'Digit2', display: '2' },
        { key: 'Digit3', display: '3' },
        { key: 'Digit4', display: '4' },
        { key: 'Digit5', display: '5' },
        { key: 'Digit6', display: '6' },
        { key: 'Digit7', display: '7' },
        { key: 'Digit8', display: '8' },
        { key: 'Digit9', display: '9' },
        { key: 'Digit0', display: '0' },
        { key: 'Minus', display: '-' },
        { key: 'Equal', display: '=' },
        { key: 'Backslash', display: '\\' },
    ],
    [
        { key: 'KeyQ', display: 'Q' },
        { key: 'KeyW', display: 'W' },
        { key: 'KeyE', display: 'E' },
        { key: 'KeyR', display: 'R' },
        { key: 'KeyT', display: 'T' },
        { key: 'KeyY', display: 'Y' },
        { key: 'KeyU', display: 'U' },
        { key: 'KeyI', display: 'I' },
        { key: 'KeyO', display: 'O' },
        { key: 'KeyP', display: 'P' },
        { key: 'BracketLeft', display: '[' },
        { key: 'BracketRight', display: ']' },
    ],
    [
        { key: 'KeyA', display: 'A' },
        { key: 'KeyS', display: 'S' },
        { key: 'KeyD', display: 'D' },
        { key: 'KeyF', display: 'F' },
        { key: 'KeyG', display: 'G' },
        { key: 'KeyH', display: 'H' },
        { key: 'KeyJ', display: 'J' },
        { key: 'KeyK', display: 'K' },
        { key: 'KeyL', display: 'L' },
        { key: 'Semicolon', display: ';' },
        { key: 'Quote', display: "'" },
    ],
    [
        { key: 'KeyZ', display: 'Z' },
        { key: 'KeyX', display: 'X' },
        { key: 'KeyC', display: 'C' },
        { key: 'KeyV', display: 'V' },
        { key: 'KeyB', display: 'B' },
        { key: 'KeyN', display: 'N' },
        { key: 'KeyM', display: 'M' },
        { key: 'Comma', display: ',' },
        { key: 'Period', display: '.' },
        { key: 'Slash', display: '/' },
    ],
] as const

const VirtualKeyboard: React.FC = () => {
    return (
        <Box>
            <Grid container spacing={1}>
                <Grid container item justify="center" spacing={1}>
                    {keyList[0].map(({ key, display }) => (
                        <Grid item>
                            <VirtualKeyboardKey
                                keyType={key}
                                latin={display}
                                only={keyMap[key].only}
                                shift={keyMap[key].shift}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid container item justify="center" spacing={1}>
                    {keyList[1].map(({ key, display }) => (
                        <Grid item>
                            <VirtualKeyboardKey
                                keyType={key}
                                latin={display}
                                only={keyMap[key].only}
                                shift={keyMap[key].shift}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid container item justify="center" spacing={1}>
                    {keyList[2].map(({ key, display }) => (
                        <Grid item>
                            <VirtualKeyboardKey
                                keyType={key}
                                latin={display}
                                only={keyMap[key].only}
                                shift={keyMap[key].shift}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid container item justify="center" spacing={1}>
                    {keyList[3].map(({ key, display }) => (
                        <Grid item>
                            <VirtualKeyboardKey
                                keyType={key}
                                latin={display}
                                only={keyMap[key].only}
                                shift={keyMap[key].shift}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    )
}

export default VirtualKeyboard

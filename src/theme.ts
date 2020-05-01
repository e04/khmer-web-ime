import { createMuiTheme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        background: {
            default: grey[300],
        },
    },
    overrides: {},
})

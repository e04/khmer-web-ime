import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ListItem } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors'

type Props = {
    word: string
    isSelected: boolean
    index: number
    enterSuggest: (index: number) => void
}

const useStyle = makeStyles({
    root: {
        cursor: 'pointer',
        fontSize: '1.25rem',
        transition: 'none',
        paddingLeft: '.5rem',
    },
})

const SuggestItem: React.FC<Props> = (props) => {
    const c = useStyle(props.isSelected)
    const onClick = () => {
        props.enterSuggest(props.index)
    }
    return (
        <ListItem
            className={c.root}
            dense={true}
            button={true}
            selected={props.isSelected}
            onClick={onClick}
        >
            {props.word}
        </ListItem>
    )
}

export default SuggestItem

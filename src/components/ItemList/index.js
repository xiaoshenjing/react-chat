import React from 'react'
import { List } from './style'
import PropTypes from 'prop-types'

const ItemList = (props) => {
    const { index, content } = props
    return (
        <List>{index}---{content}</List>
    )
}

ItemList.propTypes = {
    index: PropTypes.number.isRequired,
    content: PropTypes.number.isRequired
}

ItemList.defaultProps = {
    index: 1,
    content: '123'
}

export default ItemList
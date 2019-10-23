import React from 'react'
import { List, Delete, Title, Content } from './style'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const ItemList = (props) => {
    const { id, name, content } = props
    return (
        <List>
            <Delete>
                <Button type="danger" size='small'>删除</Button>
            </Delete>
            <Title>{id}-{name}</Title>
            <Content>{content}</Content>
        </List>
    )
}

ItemList.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default ItemList
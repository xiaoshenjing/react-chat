import React from 'react'
import { List, Wrapper, Title, Content } from './style'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const ItemList = (props) => {
    const { id, name, content, index, delectList, editList } = props

    return (
        <List>
            <Wrapper>
                <Button type="primary" size='small' onClick={() => editList(index)}>修改</Button>
                <Button type="danger" size='small' onClick={() => delectList(index)}>删除</Button>
            </Wrapper>
            <Title>{id}-{name}</Title>
            <Content>{content}</Content>
        </List>
    )
}

ItemList.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    editList: PropTypes.func.isRequired,
    delectList: PropTypes.func.isRequired,
}

export default ItemList
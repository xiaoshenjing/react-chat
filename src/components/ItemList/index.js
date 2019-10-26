import React from 'react'
import { List, Wrapper, Title, Content } from './style'
import PropTypes from 'prop-types'
import { Button, Modal, Input } from 'antd'
const { TextArea } = Input




const ItemList = (props) => {
    const { id, name, content, index, delectList, editList } = props
    let value = ''
    let visible = false
    const handleOk = () => { editList(index, value) }
    const handleCancel = () => { visible = false }
    const edit = () => {
        visible = true
        console.log(visible)
    }

    return (
        <List>
            <Wrapper>
                <Button type="primary" size='small' onClick={() => edit()}>修改</Button>
                <Button type="danger" size='small' onClick={() => delectList(index)}>删除</Button>
            </Wrapper>
            <Title>{id}-{name}</Title>
            <Content>{content}</Content>
            <Modal
                title="修改留言"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <TextArea
                    value={value}
                    placeholder="Controlled autosize"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
            </Modal>
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
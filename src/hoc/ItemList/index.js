import React, { PureComponent } from 'react'
import { List, Wrapper, Title, Content } from './style'
import { Button } from 'antd'

export default (data) => (View) => {
    class hocComponent extends PureComponent {
        constructor() {
            super()
            this.state = {
                visible: false
            }
            this.handleOk = this.handleOk.bind(this)
            this.handleCancel = this.handleCancel.bind(this)
            this.edit = this.edit.bind(this)
        }

        render() {
            const { id, name, content, index, delectList } = data

            return (
                <List>
                    <Wrapper>
                        <Button type="primary" size='small' onClick={this.edit}>修改</Button>
                        <Button type="danger" size='small' onClick={() => delectList(index)}>删除</Button>
                    </Wrapper>
                    <Title>{id}-{name}</Title>
                    <Content>{content}</Content>
                    <View
                        visible={this.state.visible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                </List>
            )
        }

        edit() {
            this.setState(() => ({
                visible: true
            }))
        }

        handleOk(value) {
            const { editList, index } = data
            editList(index, value)
        }

        handleCancel() {
            this.setState(() => ({
                visible: false
            }))
        }
    }

    return hocComponent
}
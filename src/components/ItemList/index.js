import React, { PureComponent } from 'react'
import hocComponent from '@/hoc/ItemList'
import { Input, Modal } from 'antd'
const { TextArea } = Input

const ItemList = (data) => {
    const Res = hocComponent(data)(props => {
        const { visible, handleOk, handleCancel } = props

        class Res extends PureComponent {
            state = {
                value: ''
            }

            onChange = ({ target: { value } }) => {
                this.setState({ value });
            }

            render() {
                return (
                    <Modal
                        title="修改留言"
                        visible={visible}
                        onOk={() => handleOk(this.state.value)}
                        onCancel={handleCancel}
                    >
                        <TextArea
                            value={this.state.value}
                            onChange={this.onChange}
                            placeholder="Controlled autosize"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </Modal>
                )
            }
        }
        return <Res />
    })

    return <Res />
}

export default ItemList
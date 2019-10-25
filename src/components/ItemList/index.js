import React, { PureComponent } from 'react'
import { List, Wrapper, Title, Content } from './style'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export default (props) => (WrapperComponent) => {
    class HOC extends PureComponent {
        render() {
            const { id, name, content, index, delectList, editList } = props

            return (
                <List>
                    <Wrapper>
                        <Button type="primary" size='small' onClick={() => editList(index)}>修改</Button>
                        <Button type="danger" size='small' onClick={() => delectList(index)}>删除</Button>
                    </Wrapper>
                    <Title>{id}-{name}</Title>
                    <Content>{content}</Content>
                    <WrapperComponent {...this.props} />
                </List>
            )
        }
    }

    HOC.propTypes = {
        index: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        editList: PropTypes.func.isRequired,
        delectList: PropTypes.func.isRequired,
    }
}
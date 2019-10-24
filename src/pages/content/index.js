import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { Input } from './style'
import ItemList from '../../components/ItemList'
import action from '@/store/action/content'

class Content extends PureComponent {
    render() {
        const { list, addList, delectList } = this.props

        return (
            <Fragment>
                <Input ref={input => { this.input = input }}></Input>
                <Button type="primary" block onClick={() => addList(this.input.value)}>发布</Button>
                {
                    list.map((item, index) => (
                        <ItemList
                            key={index}
                            id={item.get('id')}
                            content={item.get('content')}
                            name={item.get('name')}
                            index={index}
                            delectList={delectList}
                        />
                    ))
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getList()
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['content', 'list'])
})

const mapDispatchToProps = (dispatch) => ({
    addList(content, id = 0, name = 'bob') {
        dispatch(action.addList({ id, name, content }))
    },
    delectList(index) {
        dispatch(action.deleteList(index))
    },
    getList() {
        action.getList(dispatch)
    }
})

export const _content = connect(mapStateToProps, mapDispatchToProps)(Content)
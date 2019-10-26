import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { Input } from './style'
import ItemList from '../../components/ItemList'
import actionContent from '@/store/action/content'

class Content extends PureComponent {
    render() {
        const { list, addList, delectList, editList } = this.props

        return (
            <Fragment>
                <Input ref={input => { this.input = input }}></Input>
                <Button type="primary" block onClick={() => addList(this.input.value)}>发布</Button>
                {
                    list.map((item, index) =>
                        < ItemList
                            key={index}
                            delectList={delectList}
                            editList={editList}
                            index={index}
                            id={item.get('id')}
                            content={item.get('content')}
                            name={item.get('name')}
                        />
                    )
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
    addList(content) {
        actionContent.addList(dispatch, content)
    },
    editList(id, content) {
        actionContent.editList(dispatch, id, content)
    },
    delectList(id) {
        actionContent.deleteList(dispatch, id)
    },
    getList() {
        actionContent.getList(dispatch)
    }
})

export const _content = connect(mapStateToProps, mapDispatchToProps)(Content)
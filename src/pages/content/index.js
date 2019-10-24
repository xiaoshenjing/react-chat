import React, { PureComponent, Fragment } from 'react'
import { Input } from './style'
import { Button } from 'antd'
import { connect } from 'react-redux'
import ItemList from '../../components/ItemList'
import action from './reducer/action'

class Content extends PureComponent {
    render() {
        const { list, addList, delectList } = this.props

        return (
            <Fragment>
                <Input ref={input => { this.input = input }}></Input>
                <Button block onClick={() => addList(this.input.value)}>发布</Button>
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
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['content', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList(content, id = 0, name = 'bob') {
            dispatch(action.add({ id, name, content }))
        },
        delectList(index) {
            dispatch(action.delete(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
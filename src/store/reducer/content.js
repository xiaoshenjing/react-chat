import { fromJS } from 'immutable'
import { message } from 'antd'
import enums from '../enums/content'

const defaultProps = fromJS({
    list: []
})

export default (state = defaultProps, action) => {
    switch (action.type) {
        case enums.ADD_LIST:
            message.success('发布成功')
            return state.set('list', state.get('list').push(fromJS(action.item)))
        case enums.DELETE_LIST:
            message.success('删除成功')
            return state.set('list', state.get('list').delete(action.id))
        case enums.EDIT_LIST:
            message.success('修改成功')
            return state.setIn(['list', action.id, 'content'], action.content)
        case enums.GET_LIST:
            return state.set('list', fromJS(action.data))
        default:
            return state
    }
}
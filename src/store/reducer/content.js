import { fromJS } from 'immutable'
import enums from '../enums/content'

const defaultProps = fromJS({
    list: []
})

export default (state = defaultProps, action) => {
    switch (action.type) {
        case enums.ADD_LIST:
            return state.set('list', state.get('list').push(fromJS(action.item)))
        case enums.DELETE_LIST:
            return state.set('list', state.get('list').delete(action.index))
        case enums.GET_LIST:
            return state.set('list', fromJS(action.data))
        default:
            return state
    }
}
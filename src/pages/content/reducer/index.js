import { fromJS } from 'immutable'
import enums from './enums'

const defaultProps = fromJS({
    list: [
        { id: 1, name: 'xiao1', content: 'hello world1' },
        { id: 2, name: 'xiao2', content: 'hello world2' },
        { id: 3, name: 'xiao3', content: 'hello world3' },
        { id: 4, name: 'xiao4', content: 'hello world4' },
    ]
})

export default (state = defaultProps, action) => {
    switch (action.type) {
        case enums.ADD_LIST:
            return state.set('list', state.get('list').push(fromJS(action.item)))
        case enums.DELETE_LIST:
            return state.set('list', state.get('list').delete(action.index))
        default:
            return state
    }
}
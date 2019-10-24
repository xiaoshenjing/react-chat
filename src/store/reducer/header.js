import { fromJS } from 'immutable'
import enums from '../enums/header'

const defaultProps = fromJS({
    flag: false
})

export default (state = defaultProps, action) => {
    switch (action.type) {
        case enums.OPEN_LOGIN:
            return state.set('flag', true)
        case enums.CLOSE_LOGIN:
            return state.set('flag', false)
        default:
            return state
    }
}
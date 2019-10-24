import { fromJS } from 'immutable'
import enums from '../enums/login'

const defaultProps = fromJS({
    login: false
})

export default (state = defaultProps, action) => {
    switch (action.type) {
        case enums.LOGIN_IN:
            return state.set('login', true)
        case enums.REGISTER_IN:
            return state.set('login', false)
        default:
            return state
    }
}
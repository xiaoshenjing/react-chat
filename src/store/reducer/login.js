import { fromJS } from 'immutable'
import { message } from 'antd'
import enums from '../enums/login'

const defaultProps = fromJS({
    login: false
})

export default (state = defaultProps, action) => {
    switch (action.type) {
        case enums.GET_LOGIN:
            return state.set('login', action.data)
        case enums.LOGIN:
            message.success('登陆成功')
            return state.set('login', true)
        case enums.REGISTER:
            message.success('注册成功')
            return state.set('login', true)
        case enums.LOGOUT:
            message.success('注销成功')
            return state.set('login', false)
        default:
            return state
    }
}
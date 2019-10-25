import enums from '../enums/login'
import * as API from '@/api/index'

export default {
    login: (dispatch, data) => {
        API.login(data).then(() => {
            dispatch({ type: enums.LOGIN })
        })
    },
    register: (dispatch, data) => {
        API.register(data).then(() => {
            dispatch({ type: enums.REGISTER })
        })
    },
    logout: (dispatch) => {
        API.logout().then(() => {
            dispatch({ type: enums.LOGOUT })
        })
    },
    getLogin: (dispatch) => {
        API.getLogin().then(res => {
            dispatch({ type: enums.GET_LOGIN, data: res.login })
        })
    },
}
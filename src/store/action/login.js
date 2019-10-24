import enums from '../enums/login'

export default {
    loginIn: () => ({ type: enums.LOGIN_IN }),
    registerIn: () => ({ type: enums.REGISTER_IN })
}
import enums from '../enums/header'

export default {
    openLogin: () => ({ type: enums.OPEN_LOGIN }),
    closeLogin: () => ({ type: enums.CLOSE_LOGIN }),
}
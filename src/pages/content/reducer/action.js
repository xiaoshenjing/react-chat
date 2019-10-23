import enums from './enums'

export default {
    add: (value) => ({ type: enums.ADD_LIST, value }),
    delete: (value) => ({ type: enums.DELETE_LIST, value }),
}
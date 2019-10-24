import enums from './enums'

export default {
    add: (item) => ({ type: enums.ADD_LIST, item }),
    delete: (index) => ({ type: enums.DELETE_LIST, index }),
}
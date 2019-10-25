import enums from '../enums/content'
import * as API from '@/api/index'

export default {
    addList: (item) => ({ type: enums.ADD_LIST, item }),
    deleteList: (id) => ({ type: enums.DELETE_LIST, id }),
    editList: (id) => ({ type: enums.EDIT_LIST, id }),
    getList: (dispatch) => {
        API.getList().then(res => {
            dispatch({ type: enums.GET_LIST, data: res.list })
        })
    }
}
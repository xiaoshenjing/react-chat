import enums from '../enums/content'
import * as API from '@/api/index'

export default {
    addList: (dispatch, content) => {
        API.addList({ content }).then(res => {
            dispatch({ type: enums.ADD_LIST, item: res.item })
        })
    },
    deleteList: (dispatch, id) => {
        API.deleteList({ id }).then(() => {
            dispatch({ type: enums.DELETE_LIST, id })
        })
    },
    editList: (dispatch, id, content) => {
        API.editList({ id, content }).then(() => {
            dispatch({ type: enums.EDIT_LIST, id, content })
        })
    },
    getList: (dispatch) => {
        API.getList().then(res => {
            dispatch({ type: enums.GET_LIST, data: res.list })
        })
    }
}
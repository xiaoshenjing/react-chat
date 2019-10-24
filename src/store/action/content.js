import * as API from '@/api/index'
import enums from '../enums/content'

export default {
    addList: (item) => ({ type: enums.ADD_LIST, item }),
    deleteList: (index) => ({ type: enums.DELETE_LIST, index }),
    getList: (dispatch) => {
        API.getList().then(res => {
            dispatch({ type: enums.GET_LIST, data: res.list })
        })
    }
}
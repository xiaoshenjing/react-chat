import { createStore, combineReducers } from 'redux';
import contentReducer from './content/reducer';

const reducer = combineReducers({
    content: contentReducer,
})

const store = createStore(reducer);

export default store
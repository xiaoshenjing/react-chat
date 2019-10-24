import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import contentReducer from './content/reducer';

const reducer = combineReducers({
    content: contentReducer,
})

const composeEnhancers = composeWithDevTools({
    features: {
        pause: true, // start/pause recording of dispatched actions
        lock: false, // lock/unlock dispatching actions and side effects    
        persist: true, // persist states on page reloading
        export: true, // export history of actions in a file
        import: 'custom', // import history of actions from a file
        jump: true, // jump back and forth (time travelling)
        skip: true, // skip (cancel) actions
        reorder: true, // drag and drop actions in the history list 
        dispatch: true, // dispatch custom actions or action creators
        test: true // generate tests for the selected actions
    },
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(reducer, composeEnhancers());

export default store
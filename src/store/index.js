import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const reducerModules = require.context('./reducer', true, /\.js$/)

const asyncReducer = {}
reducerModules.keys().map(item => {
    const value = reducerModules(item)
    asyncReducer[item.match(/\/(\S*)\./)[1]] = value.default
    return false
})

const reducer = combineReducers(asyncReducer)

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

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store
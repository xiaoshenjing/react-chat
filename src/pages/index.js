import React from 'react';
import { Provider } from 'react-redux'
import { AppWrapper } from './style'
import { Router } from '../router'
import store from '../store'

// 导出到 router
export { _header as Header } from './header';
export { _content as Content } from './content';
export { _login as Login } from './login';

const App = () => (
    <Provider store={store}>
        <AppWrapper>
            <Router></Router>
        </AppWrapper>
    </Provider>
)

export default App
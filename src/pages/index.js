import React from 'react';
import { AppWrapper } from './style'
import { Provider } from 'react-redux'
import store from './store'
import Header from './header';
import Content from './content';

const App = () => (
    <Provider store={store}>
        <AppWrapper>
            <Header></Header>
            <Content></Content>
        </AppWrapper>
    </Provider>
)

export default App
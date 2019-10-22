import React from 'react';
import { AppWrapper } from './style'
import Header from './header';
import Content from './content';

const App = (props) => (
    <AppWrapper>
        <Header></Header>
        <Content></Content>
    </AppWrapper>
)

export default App
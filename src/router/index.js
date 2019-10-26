import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header, Content, Login } from '../pages'

export const Router = () => (
    <BrowserRouter>
        <Header />
        <Route exact path='/' component={Content}></Route>
        <Route exact path='/login' component={Login}></Route>
    </BrowserRouter>
)
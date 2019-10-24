import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Header, Content, Login } from '../pages'

export const Router = () => (
    <BrowserRouter>
        <Header />
        <Redirect to='/content' />
        <Route path='/content' exact component={Content}></Route>
        <Route path='/login' exact component={Login}></Route>
    </BrowserRouter>
)
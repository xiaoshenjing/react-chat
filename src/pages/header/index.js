import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'antd'
import { Wrapper, Title } from './style'
import actionHeader from '@/store/action/header'
import actionLogin from '@/store/action/login'

class Header extends PureComponent {
    render() {
        const { flag, openLogin, closeLogin, login, logout } = this.props

        return (
            <Wrapper>
                <Title>欢迎发布您的留言：</Title>
                {
                    login ?
                        <Fragment>
                            <Redirect to='/content' />
                            <Button type='danger' onClick={() => logout()}>注销</Button>
                        </Fragment>
                        :
                        flag ?
                            <Link to='/content'>
                                <Button type='primary' onClick={() => closeLogin()}>返回</Button>
                            </Link>
                            :
                            <Link to='/login'>
                                <Button type='primary' onClick={() => openLogin()}>登录</Button>
                            </Link>

                }
            </Wrapper>
        )
    }

    UNSAFE_componentWillMount() {
        this.props.getLogin()
    }
}

const mapStateToProps = (state) => ({
    flag: state.getIn(['header', 'flag']),
    login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    openLogin() {
        dispatch(actionHeader.openLogin())
    },
    closeLogin() {
        dispatch(actionHeader.closeLogin())
    },
    logout() {
        actionLogin.logout(dispatch)
    },
    getLogin() {
        actionLogin.getLogin(dispatch)
    }
})

export const _header = connect(mapStateToProps, mapDispatchToProps)(Header)
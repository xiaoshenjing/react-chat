import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { Wrapper, Title } from './style'
import action from '@/store/action/header'

class Header extends PureComponent {
    render() {
        const { flag, openLogin, closeLogin } = this.props

        return (
            <Wrapper>
                <Title>欢迎发布您的留言：</Title>
                {
                    flag ?
                        <Link to='/content'>
                            <Button type='danger' onClick={() => closeLogin()}>返回</Button>
                        </Link>
                        :
                        <Link to='/login'>
                            <Button type='primary' onClick={() => openLogin()}>登录</Button>
                        </Link>
                }
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    flag: state.getIn(['header', 'flag'])
})

const mapDispatchToProps = (dispatch) => ({
    openLogin() {
        dispatch(action.openLogin())
    },
    closeLogin() {
        dispatch(action.closeLogin())
    }
})

export const _header = connect(mapStateToProps, mapDispatchToProps)(Header)
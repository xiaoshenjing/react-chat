import React, { PureComponent } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Wrapper, Label, Input, ButtonWrapper } from './style'
import actionLogin from '@/store/action/login'

class Login extends PureComponent {
    render() {
        const { login, register } = this.props

        return (
            <Wrapper>
                <Label>
                    <span>账户：</span>
                    <Input ref={account => this.account = account}></Input>
                </Label>
                <Label>
                    <span>密码：</span>
                    <Input ref={password => this.password = password}></Input>
                </Label>
                <ButtonWrapper>
                    <Button type='default' onClick={() => login({ account: this.account.value, password: this.password.value })}>登陆</Button>
                    <Button type='primary' onClick={() => register({ account: this.account.value, password: this.password.value })}>注册</Button>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    login(data) {
        actionLogin.login(dispatch, data)
    },
    register(data) {
        actionLogin.register(dispatch, data)
    }
})

export const _login = connect(mapStateToProps, mapDispatchToProps)(Login)
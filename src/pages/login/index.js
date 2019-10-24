import React, { PureComponent } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Wrapper, Label, Input, ButtonWrapper } from './style'
import action from '@/store/action/login'

class Login extends PureComponent {
    render() {
        const { loginIn, registerIn } = this.props

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
                    <Button type='default' onClick={() => loginIn()}>登陆</Button>
                    <Button type='primary' onClick={() => registerIn()}>注册</Button>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    loginIn() {
        dispatch(action.loginIn())
    },
    registerIn() {
        dispatch(action.registerIn())
    }
})

export const _login = connect(mapStateToProps, mapDispatchToProps)(Login)
import React, { PureComponent } from 'react'
import { Wrapper, Title, Login } from './style'

class Header extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Title>欢迎发布您的留言：</Title>
                <Login>登录</Login>
            </Wrapper>
        )
    }
}

export default Header
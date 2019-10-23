import React, { PureComponent } from 'react'
import { Wrapper, Title } from './style'
import { Button } from 'antd'

class Header extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Title>欢迎发布您的留言：</Title>
                <Button type='primary'>登录</Button>
            </Wrapper>
        )
    }
}

export default Header
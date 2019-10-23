import React, { PureComponent, Fragment } from 'react'
import { Input } from './style'
import { Button } from 'antd'
import ItemList from '../../components/ItemList'

class Content extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: 1, name: 'xiao1', content: 'hello world1' },
                { id: 2, name: 'xiao2', content: 'hello world2' },
                { id: 3, name: 'xiao3', content: 'hello world3' },
                { id: 4, name: 'xiao4', content: 'hello world4' },
                { id: 5, name: 'xiao5', content: 'hello world5' },
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Input></Input>
                <Button block>发布</Button>
                <div>
                    {
                        this.state.list.map(item => (
                            <ItemList
                                key={item.id}
                                id={item.id}
                                content={item.content}
                                name={item.name}
                            />
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default Content
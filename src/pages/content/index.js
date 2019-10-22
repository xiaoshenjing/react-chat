import React, { PureComponent, Fragment } from 'react'
import { Input, Publish, ListWrapper } from './style'
import ItemList from '../../components/ItemList'

class Content extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list: [1, 2, 3, 4, 5]
        }
    }

    render() {
        return (
            <Fragment>
                <Input></Input>
                <Publish>发布</Publish>
                <ListWrapper>
                    {
                        this.state.list.forEach((item, i) => (
                            <ItemList
                                key={i}
                                content={item}
                                index={i}
                            ></ItemList>
                        ))
                    }
                </ListWrapper>
            </Fragment>
        )
    }
}

export default Content
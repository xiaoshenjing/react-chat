import Mock from 'mockjs'

const Random = Mock.Random

const result = {
    code: 1,
    message: 'success',
    data: {}
}

const listData = () => {
    result.data.list = []
    for (let i = 0; i < Random.integer(5, 10); i++) {
        result.data.list.push({
            id: i + 1,
            name: Random.cname(2, 3),
            content: Random.cparagraph(3, 10)
        })
    }
    return result
}

const decroate = (url, method, data) => { Mock.mock(RegExp(`${url}.*`), method, data) }

decroate('getList', 'get', listData())
import Mock from 'mockjs'

const Random = Mock.Random

const result = {
    code: 1,
    data: {
        message: 'success'
    }
}

const getList = () => {
    let res = JSON.parse(JSON.stringify(result))
    res.data.list = []
    for (let i = 0; i < Random.integer(5, 10); i++) {
        res.data.list.push({
            id: i + 1,
            name: Random.cname(2, 3),
            content: Random.cparagraph(3, 10)
        })
    }
    return res
}

const postList = () => {
    let res = JSON.parse(JSON.stringify(result))
    res.data.item = {
        id: Random.integer(0, 1000),
        name: Random.ctitle(2, 9),
        content: Random.cparagraph(7, 9)
    }
    return res
}

const getLogin = () => {
    let res = JSON.parse(JSON.stringify(result))
    res.data.login = true
    return res
}

const success = (() => {
    let res = JSON.parse(JSON.stringify(result))
    return res
})()

const decroate = (url, method, data) => { Mock.mock(RegExp(`${url}.*`), method, data) }

decroate('list', 'get', getList())
decroate('list', 'post', postList())
decroate('list', 'delete', success)
decroate('list', 'put', success)

decroate('login', 'get', getLogin())
decroate('login', 'post', success)
decroate('logout', 'post', success)
decroate('register', 'post', success)
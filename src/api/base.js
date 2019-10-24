import Axios from "axios"

class Base {
    constructor(url) {
        this.axios = Axios.create({
            baseURL: url,
            timeout: 5000
        })
    }

    check() {
        this.axios.interceptors.response.use(
            response => {
                return Promise.resolve(response)
            },
            error => {
                switch (error.response.status) {
                    case 400:
                        error.message = '错误请求'
                        break
                    case 401:
                        error.message = '未授权，请重新登录'
                        break
                    case 403:
                        error.message = '禁止访问'
                        break
                    case 404:
                        error.message = '请求错误,未找到该资源'
                        break
                    case 405:
                        error.message = '请求方法未允许'
                        break
                    case 408:
                        error.message = '请求超时'
                        break
                    case 413:
                        error.message = '上传文件过大'
                        break
                    case 415:
                        error.message = '请求格式未允许'
                        break
                    case 500:
                        error.message = '服务器端出错'
                        break
                    case 501:
                        error.message = '网络未实现'
                        break
                    case 502:
                        error.message = '网络错误'
                        break
                    case 503:
                        error.message = '服务不可用'
                        break
                    case 504:
                        error.message = '网络超时'
                        break
                    case 505:
                        error.message = 'http版本不支持该请求'
                        break
                    default:
                        error.message = `连接错误,${error.response.msg}`
                }
                console.log(error.message);
                return Promise.reject(error)
            }
        )
    }

    full(response, flag) {
        if (response.data && response.data.code === 1) {
            if (!flag) {
                return Promise.resolve(response.data.data)
            } else {
                return Promise.resolve(response.data)
            }
        }
    }

    async get(url, { data = '', fullFlag = false } = {}) {
        this.check()
        const res = await this.axios.get(url, data)
        return this.full(res, fullFlag)
    }

    async post(url, { data = '', fullFlag = false } = {}) {
        this.check()
        const res = await this.axios.post(url, data)
        return this.full(res, fullFlag)
    }

    async put(url, { data = '', fullFlag = false } = {}) {
        this.check()
        const res = await this.axios.put(url, data)
        return this.full(res, fullFlag)
    }

    async delete(url, { data = '', fullFlag = false } = {}) {
        this.check()
        const res = await this.axios.delete(url, data)
        return this.full(res, fullFlag)
    }
}

const http = new Base('')

export default http
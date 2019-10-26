import http from './base'

// get
export function getList() {
    return http.get('list')
}

export function getLogin() {
    return http.get('login')
}

// post
export function login({ account, password }) {
    return http.post('login', { data: { account, password } })
}

export function register({ account, password }) {
    return http.post('register', { data: { account, password } })
}

export function logout() {
    return http.post('logout')
}

export function addList({ content }) {
    return http.post('list', { data: { content } })
}
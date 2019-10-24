import http from './base'

export function getList() {
    return http.get('getList')
}
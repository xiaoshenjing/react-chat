export default {
    session: 'REACT_SESSION',
    local: "REACT_LOCAL",
    localGet(str) {
        const data = localStorage.getItem(this.session)
        const res = data && JSON.parse(data)[str]
        return (value) => {
            if (res) {
                return res
            } else {
                localStorage.setItem(this.session, JSON.stringify({ str: value }))
                return value
            }
        }
    },
    localSet(str, target) {
        let data = localStorage.getItem(this.session)
        data = JSON.parse(data)
        data[str] = target
        localStorage.setItem(this.session, JSON.stringify(data))
    },
    localRemove(str) {
        let data = localStorage.getItem(this.session)
        data = JSON.parse(data)
        delete data[str]
        localStorage.setItem(this.session, JSON.stringify(data))
    },
    sessionGet(str) {
        sessionStorage.getItem()
    },
    sessionSet(str) {
        sessionStorage.setItem()
    },
    sessionRemove(str) {
        sessionStorage.removeItem()
    }
}
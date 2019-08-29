import axios from 'axios'
let url = `http://localhost:8081/borrow/`

export const Borrow = (data) => {
    return {
        type: 'BORROW_BOOK',
        payload: axios.post(url, data, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}

export const Return = (data) => {
    return {
        type: 'RETURN_BOOK',
        payload: axios.patch(url, data, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}

export const latestBorrow = (id) => {
    return {
        type: 'LATEST_BORROW',
        payload: axios.get(`${url}${id}`, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}
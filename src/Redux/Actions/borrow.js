import axios from 'axios'
let url = `https://book-library22.herokuapp.com/borrow/`

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

export const Return = (id) => {
    return {
        type: 'RETURN_BOOK',
        payload: axios.patch(`${url}${id}`, null, {
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
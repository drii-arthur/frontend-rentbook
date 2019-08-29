import axios from 'axios'

let url = `http://localhost:8081/book`

export const getBook = (genre, year) => {
    let query = ''
    if (genre !== undefined) {
        query = `${url}/genre/${genre}`
    } else if (year !== undefined) {
        query = `${url}/year/${year}`
    } else {
        query = url
    }
    return {
        type: 'GET_BOOKS',
        payload: axios.get(query, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}

export const addBook = (data) => {
    return {
        type: 'ADD_BOOKS',
        payload: axios.post(url, data, {
            headers: { authorization: window.localStorage.getItem('token') }
        })
    }
}

export const editBook = (id, data) => {
    return {
        type: 'EDIT_BOOKS',
        payload: axios.patch(`${url}/${id}`, data, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}

export const deleteBook = (id) => {
    return {
        type: 'DELETE_BOOKS',
        payload: axios.delete(`${url}/${id}`, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}

export const getYear = () => {
    return {
        type: 'GET_YEARS',
        payload: axios.get('http://localhost:8081/books/year', {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}
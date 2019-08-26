import axios from 'axios'

const url = `http://localhost:8081/book`

export const getBook = () => {
    return {
        type: 'GET_BOOKS',
        payload: axios.get(url)
    }
}
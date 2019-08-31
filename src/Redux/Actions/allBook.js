import axios from 'axios'
let url = 'http://localhost:8081'
export const getAllBook = () => {
    return {
        type: 'GET_ALl_BOOKS',
        payload: axios.get(`${url}/book/all`)
    }
}

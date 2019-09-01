import axios from 'axios'
let url = 'https://book-library22.herokuapp.com'
export const getAllBook = () => {
    return {
        type: 'GET_ALl_BOOKS',
        payload: axios.get(`${url}/book/all`)
    }
}

import axios from 'axios'

const url = `http://localhost:8081/genre/cat`

export const getGenre = () => {
    return {
        type: 'GET_GENRE',
        payload: axios.get(url, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}
import axios from 'axios'

const url = `https://book-library22.herokuapp.com/genre/cat`

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
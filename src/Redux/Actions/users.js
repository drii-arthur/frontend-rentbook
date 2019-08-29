import axios from 'axios'

const url = `http://localhost:8081/users`

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/register`, data)
    }
}

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login`, data)
    }
}

export const profile = () => {
    return {
        type: 'PROFILE_USER',
        payload: axios.get(`${url}/profile`, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}
const initialState = {
    userList: [],
    isLoading: false,
    isFulFilled: false,
    isRejected: false
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILE_USER':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'PROFILE_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'PROFILE_USER_FULFILLED':
            return {
                ...state,
                isRejected: false,
                isFulFilled: true,
                userList: action.payload.data
            }

        // get user by id
        case 'GET_USERID_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_USERID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_USERID_FULFILLED':
            return {
                ...state,
                isRejected: false,
                isFulFilled: true,
                userList: action.payload.data
            }
        // register user
        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'REGISTER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                isRejected: false,
                isFulFilled: true,
                userList: action.payload.data
            }
        // user login
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isRejected: false,
                isFulFilled: true,
                token: action.payload.data.token
            }
        default:
            return state
    }
}

export default users
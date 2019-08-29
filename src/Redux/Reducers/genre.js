const initialState = {
    genreList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const genre = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GENRE_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_GENRE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_GENRE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                genreList: action.payload.data
            }
        default:
            return state
    }
}

export default genre
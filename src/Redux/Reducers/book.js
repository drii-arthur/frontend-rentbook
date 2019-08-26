const initialState = {
    bookList: [],
    isLoading: false,
    isFulFilled: false,
    isRejected: false
}

const books = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'GET_BOOKS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_BOOKS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                bookList: action.payload.data
            }
        default:
            return state
    }
}

export default books
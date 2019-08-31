const initialState = {
    bookAllList: [],
    isLoading: false,
    isFulFilled: false,
    isRejected: false
}

const AllBook = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALl_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false
            }
        case 'GET_ALl_BOOKS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_ALl_BOOKS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                bookAllList: action.payload.data
            }
        default:
            return state
    }
}

export default AllBook
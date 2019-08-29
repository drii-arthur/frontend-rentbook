const initialState = {
    borrowList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const borrowing = (state = initialState, action) => {
    switch (action.type) {
        case 'BORROW_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'BORROW_BOOK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'BORROW_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                borrowList: action.payload.data
            }
        case 'RETURN_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'RETURN_BOOK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'RETURN_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                borrowList: action.payload.data
            }
        case 'LATEST_BORROW_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'LATEST_BOOROW_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: false
            }
        case 'LATEST_BORROW_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                borrowList: action.payload.data
            }
        default:
            return state
    }
}

export default borrowing
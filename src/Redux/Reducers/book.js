const initialState = {
    bookList: [],
    yearList: [],
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
        // add book
        case 'ADD_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'ADD_BOOKS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'ADD_BOOKS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                bookList: state.bookList.push(action.payload.data)
            }
        // edit data
        case 'EDIT_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'EDIT_BOOKS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'EDIT_BOOKS_FULFILLED':
            const newBook = action.payload.data
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                bookList: state.bookList.map((books) => {
                    return books.id_books == newBook.id_books ? newBook : books
                })
            }
        case 'DELETE_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'DELETE_BOOKS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'DELETE_BOOKS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                bookList: state.bookList.map((books) => {
                    return books.id_books != action.payload.data.id_books
                })
            }
        case 'GET_YEARS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_YEARS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_YEARS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                yearList: action.payload.data
            }
        default:
            return state
    }
}

export default books
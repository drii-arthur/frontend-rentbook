import { combineReducers } from 'redux'
import books from './book'
import users from './users'
import genre from './genre'
import borrowing from './borrow'

const rootReducer = combineReducers({
    books,
    users,
    genre,
    borrowing,
})

export default rootReducer
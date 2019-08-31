import { combineReducers } from 'redux'
import books from './book'
import users from './users'
import genre from './genre'
import borrowing from './borrow'
import allBook from './allBook'

const rootReducer = combineReducers({
    books,
    users,
    genre,
    borrowing,
    allBook,

})

export default rootReducer
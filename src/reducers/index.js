import {combineReducers} from 'redux';
import BookReducers from './bookReducer';
import SelectedBookReducer from './selectedBookReducers'

export default combineReducers({
    books: BookReducers,
    selectedBook: SelectedBookReducer
})
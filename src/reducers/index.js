import { combineReducers } from 'redux';
import postReducer from './postReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
    posts: postReducer,
    users: UsersReducer
});

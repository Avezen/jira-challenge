import { combineReducers } from 'redux'
import {tasks} from "./taskReducer";
import {authenticatedUser} from "./authentication";

export default combineReducers({
    authenticatedUser,
    tasks
})
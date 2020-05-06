import { combineReducers } from 'redux'
import {tasks} from "./taskReducer";
import {token} from "./authentication";

export default combineReducers({
    token,
    tasks
})
import { combineReducers } from 'redux'
import {authenticatedUser} from "./authentication";
import {navigationByMenu, selectedMenu} from "./fetchNavigation";
import {tasks} from "./taskReducer";

export default combineReducers({
    authenticatedUser,
    selectedMenu,
    navigationByMenu,
    tasks
})
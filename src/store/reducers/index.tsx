import { combineReducers } from 'redux'
import {authenticatedUser} from "./authentication";
import {navigationByMenu, selectedMenu} from "./fetchNavigation";

export default combineReducers({
    authenticatedUser,
    selectedMenu,
    navigationByMenu
})
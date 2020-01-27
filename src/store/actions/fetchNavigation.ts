import {fetchAdminNavigation} from "../../services/AdminNavigation";

export const REQUEST_NAVIGATION = 'REQUEST_NAVIGATION';
export const RECEIVE_NAVIGATION = 'RECEIVE_NAVIGATION';
export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';
export const INVALIDATE_MENU_ITEM = 'INVALIDATE_MENU_ITEM';

export const selectMenuItem = (menuItem: any) => {
    return {
        type: SELECT_MENU_ITEM,
        menuItem
    }
};

export const invalidateMenuItem = (menuItem: any) => {
    return {
        type: INVALIDATE_MENU_ITEM,
        menuItem
    }
};

const requestNavigation = (menuItem: any) => {
    return {
        type: REQUEST_NAVIGATION,
        menuItem
    }
};


const receiveNavigation = (menuItem: any, json: any) => {
    return {
        type: RECEIVE_NAVIGATION,
        menuItem,
        navigation: json,
        receivedAt: Date.now()
    }
};


export const fetchNavigation = (menuItem: any) => {
    return (dispatch: any) => {
        dispatch(requestNavigation(menuItem));
        if(menuItem === 'admin'){
            return fetchAdminNavigation()
            //.then(response => response.json())
                .then((json: any) => {
                    dispatch(receiveNavigation(menuItem, json))
                })
        }

        return fetchAdminNavigation()
            //.then(response => response.json())
            .then((json: any) => {
                dispatch(receiveNavigation(menuItem, json.data))
            })
    }
};


const shouldFetchNavigation = (state: any, menuItem: any) => {
    const navigation = state.navigationByMenu[menuItem];
    if (!navigation) {
        return true
    } else if (navigation.isFetching) {
        return false
    } else {
        return navigation.didInvalidate
    }
};


export const fetchNavigationIfNeeded = (menuItem: any) => {
    return (dispatch: any, getState: any) => {
        if (shouldFetchNavigation(getState(), menuItem)) {
            return dispatch(fetchNavigation(menuItem))
        }
    }
};
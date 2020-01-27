import {
    SELECT_MENU_ITEM,
    INVALIDATE_MENU_ITEM,
    REQUEST_NAVIGATION,
    RECEIVE_NAVIGATION
} from '../actions/fetchNavigation'



export const selectedMenu = (state = 'symfony', action: any) => {
    switch (action.type) {
        case SELECT_MENU_ITEM:
            return action.menuItem;
        default:
            return state
    }
};


const navigation = (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action: any
) => {
    switch (action.type) {
        case INVALIDATE_MENU_ITEM:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_NAVIGATION:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_NAVIGATION:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.navigation,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
};


export const navigationByMenu = (state: any = {}, action: any) => {
    switch (action.type) {
        case INVALIDATE_MENU_ITEM:
        case RECEIVE_NAVIGATION:
        case REQUEST_NAVIGATION:
            return Object.assign({}, state, {
                [action.menuItem]: navigation(state[action.menuItem], action)
            });
        default:
            return state
    }
};

// export const getProducts = state => state.productsReducer.products;
// export const getProductsPending = state => state.productsReducer.pending;
// export const getProductsError = state => state.productsReducer.error;
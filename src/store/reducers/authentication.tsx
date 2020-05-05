import {GET_USER_FAILURE, GET_USER_SUCCESS, REQUEST_USER} from "../actions/authentication";
import {isObjectEmpty} from "../../utils";


const initialState: any = {
    token: null,
    isFetching: false,
    error: null
};

export const authenticatedUser = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.user.token,
                isFetching: false,
                error: null
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

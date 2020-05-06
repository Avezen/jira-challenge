import {GET_TOKEN_FAILURE, GET_TOKEN_SUCCESS, REMOVE_TOKEN, REQUEST_TOKEN} from "../actions/authentication";
import {isObjectEmpty} from "../../utils";


const initialState: any = {
    token: null,
    isFetching: false,
    error: null
};

export const token = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_TOKEN:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case REMOVE_TOKEN:
            return {
                ...state,
                token: null,
            };
        case GET_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload.user.token,
                isFetching: false,
                error: null
            };
        case GET_TOKEN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

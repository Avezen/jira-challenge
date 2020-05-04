import {GET_USER_FAILURE, GET_USER_SUCCESS, REQUEST_USER} from "../actions/authentication";
import {isObjectEmpty} from "../../utils";


const initialState: any = {
    data: [],
    fetchingTasks: true,
    error: null
};

export const user = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                fetchingTasks: true,
                error: null,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                data: action.payload.tasks,
                fetchingTasks: false,
                error: null
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                fetchingTasks: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

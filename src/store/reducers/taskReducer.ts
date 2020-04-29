import {GET_TASKS_FAILURE, GET_TASKS_SUCCESS, REQUEST_TASKS} from "../actions/taskActions";

const initialState: any = {
    data: [],
    fetchingTasks: true,
    error: null
};

export const tasks = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_TASKS:
            return {
                ...state,
                fetchingTasks: true,
                error: null,
            };
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                data: action.payload.tasks,
                fetchingTasks: false,
                error: null
            };
        case GET_TASKS_FAILURE:
            return {
                ...state,
                fetchingTasks: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};
import {AppAPI} from "../../services/APIService";

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';

const requestTasks = () => ({
    type: REQUEST_TASKS
});

const getTasksSuccess = (tasks: any) => ({
    type: GET_TASKS_SUCCESS,
    payload: {
        tasks
    }
});

const getTasksFailure = (error: any) => ({
    type: GET_TASKS_FAILURE,
    payload: {
        error
    }
});

export const getTasks = () => (
    (dispatch: any) => {
        dispatch(requestTasks());
        AppAPI.get(`/task`)
            .then(res => dispatch(getTasksSuccess(res.data)))
            .catch(err => dispatch(getTasksFailure(err)))
    }
);
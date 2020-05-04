import {fetchUser} from "../../services/FetchUser";
import {AppAPI} from "../../services/APIService";

export const REQUEST_USER = 'REQUEST_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

const requestUser = () => ({
    type: REQUEST_USER
});

const getUserSuccess = (tasks: any) => ({
    type: GET_USER_SUCCESS,
    payload: {
        tasks
    }
});

const getUserFailure = (error: any) => ({
    type: GET_USER_FAILURE,
    payload: {
        error
    }
});

export const getUser = () => (
    (dispatch: any) => {
        dispatch(requestUser());
        AppAPI.get(`/task`)
            .then(res => dispatch(getUserSuccess(res.data)))
            .catch(err => dispatch(getUserFailure(err)))
    }
);

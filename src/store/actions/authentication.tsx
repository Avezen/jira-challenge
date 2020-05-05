import {AppAPI} from "../../services/APIService";

export const REQUEST_USER = 'REQUEST_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

const requestUser = () => ({
    type: REQUEST_USER
});

const getUserSuccess = (user: any) => ({
    type: GET_USER_SUCCESS,
    payload: {
        user
    }
});

const getUserFailure = (error: any) => ({
    type: GET_USER_FAILURE,
    payload: {
        error
    }
});

export const getUser = (login: any, password: any) => (
    (dispatch: any) => {
        dispatch(requestUser());
        AppAPI.post(`/api/login_check`, {
            username: login,
            password: password
        })
            .then(res => dispatch(getUserSuccess(res.data)))
            .catch(err => dispatch(getUserFailure(err)))
    }
);

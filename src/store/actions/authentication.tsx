import {AppAPI} from "../../services/APIService";

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILURE = 'GET_TOKEN_FAILURE';

const requestToken = () => ({
    type: REQUEST_TOKEN
});

const removeToken = () => ({
    type: REMOVE_TOKEN
});

const getTokenSuccess = (user: any) => ({
    type: GET_TOKEN_SUCCESS,
    payload: {
        user
    }
});

const getTokenFailure = (error: any) => ({
    type: GET_TOKEN_FAILURE,
    payload: {
        error
    }
});

export const getUser = (login: any, password: any) => (
    (dispatch: any) => {
        dispatch(requestToken());
        AppAPI.post(`/api/login_check`, {
            username: login,
            password: password
        })
            .then(res => dispatch(getTokenSuccess(res.data)))
            .catch(err => dispatch(getTokenFailure(err)))
    }
);

export const logoutUser = (dispatch: any) => dispatch(removeToken());

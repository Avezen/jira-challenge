import {fetchUser} from "../../services/FetchUser";

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';


const requestUser = () => {
    return {
        type: REQUEST_USER
    }
};

const receiveUser = (data: any) => {
    return {
        type: RECEIVE_USER,
        user: data
    }
};

export const fetchAuthenticatedUser = () => {
    return (dispatch: any) => {
        dispatch(requestUser());
        return fetchUser()
        //.then(response => response.json())
            .then((json: any) => {
                dispatch(receiveUser(json.data))
            })
    }
};

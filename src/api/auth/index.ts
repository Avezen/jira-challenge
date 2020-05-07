import {AppAPI} from "../index";

export const authApi = {
    authenticate(email: any, password: any) {
        return AppAPI.post(`/login_check`, {
            username: email,
            password: password
        })
    }
};
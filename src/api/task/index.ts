import {AppAPI} from "../index";
import {IColumn} from "../../types/IColumn";
import {ITask} from "../../types/ITask";

export interface TaskRequestError {
    code: number;
    message: string;
}

export const taskApi = {
    fetchAll () {
        return AppAPI.get(`/task`);
    },
    post (columnId: IColumn['id'], payload: any) {
        // return AppAPI.post(`/column/${columnId}/task`, payload);
        return new Promise((resolve, reject) => {
            let wait = setTimeout(() => {
                clearTimeout(wait);
                resolve({ columnId, payload });
                reject('Wrong')
            }, 1)
        });
    },
    update (taskId: ITask['id'], payload: any) {
        return AppAPI.patch(`/task/${taskId}`, payload);
    }
};
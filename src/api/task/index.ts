import {AppAPI, headers} from "../index";
import {IColumn} from "../../types/IColumn";
import {ITask} from "../../types/ITask";
import {getSessionToken} from "../../services/AuthStorage";

export interface TaskRequestError {
    code: number;
    message: string;
}


export const taskApi = {
    fetchAll () {
        return AppAPI.get(`/stage/task/active`, {
            headers: headers.authorization(getSessionToken())
        });
    },
    post (columnId: IColumn['id'], payload: any) {
        console.log(payload);

        return AppAPI.post(`/stage/${columnId}/task`, payload,{
            headers: headers.authorization(getSessionToken())
        });
    },
    updateStage (taskId: ITask['id'], stageId: any) {
        return AppAPI.patch(`/task/${taskId}/stage/${stageId}`, null,{
            headers: headers.authorization(getSessionToken())
        });
    }
};
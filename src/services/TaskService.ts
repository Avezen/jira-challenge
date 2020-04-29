import {AppAPI} from './APIService';
import {ITask} from "../types/ITask";
import {IColumn} from "../types/IColumn";

export interface TaskRequestError {
  code: number;
  message: string;
}

export const createTask = (columnId: IColumn['id'], payload: any) => {
  return AppAPI.post(`/column/${columnId}/task`, payload);
};

export const updateTask = (taskId: ITask['id'], payload: any) =>
    AppAPI.patch(`/task/${taskId}`, payload);


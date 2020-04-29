import {AppAPI} from './APIService';
import {ITask} from "../types/ITask";
import {IColumn} from "../types/IColumn";

export interface TaskRequestError {
  code: number;
  message: string;
}


export const getTasks = () =>
    AppAPI.get(`/task`);


export const postTask = (columnId: IColumn['id'], payload: any) => {
  // return AppAPI.post(`/column/${columnId}/task`, payload);
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve({ columnId, payload });
      reject('Wrong')
    }, 1)
  });
};

export const updateTask = (taskId: ITask['id'], payload: any) =>
    AppAPI.patch(`/task/${taskId}`, payload);


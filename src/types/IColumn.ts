import {ITask} from "./ITask";

export interface IColumn {
    id: number;
    name: string;
    description: string;
    tasks: ITask[];
}


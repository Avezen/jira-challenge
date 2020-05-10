export interface ITask {
    id: string;
    name: string;
    description: string;
    category: string;
    taskSteps: any[];
    developers: number[];
    createdBy: number;
}

export interface ITaskForm {
    name: string;
    description: string;
    category: string;
    taskSteps: any[];
    createdFor: number
    createdBy: number;
}

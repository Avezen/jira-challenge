export interface ITask {
    id: string;
    name: string;
    description: string;
    category: string;
    steps: string[];
    developers: number[];
    createdBy: number;
}

export interface ITaskForm {
    name: string;
    description: string;
    category: string;
    steps: string[];
    developers: number[];
    createdBy: number;
}

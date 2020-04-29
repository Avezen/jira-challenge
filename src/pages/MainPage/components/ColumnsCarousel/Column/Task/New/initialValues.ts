import {ITaskForm} from "../../../../../../../types/ITask";

export const newTaskFormInitialValues : ITaskForm = {
    name: '',
    description: '',
    category: '',
    steps: [''],
    developers: [],
    createdBy: 1,
};
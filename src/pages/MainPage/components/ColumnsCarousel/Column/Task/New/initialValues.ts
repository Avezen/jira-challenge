import {ITaskForm} from "../../../../../../../types/ITask";

export const newTaskFormInitialValues : ITaskForm = {
    name: '',
    description: '',
    category: '',
    taskSteps: [{name: ''}],
    createdFor: 5,
    createdBy: 5,
};
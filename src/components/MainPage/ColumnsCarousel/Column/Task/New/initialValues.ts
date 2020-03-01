interface MyFormValues {
    name: string;
    description: string;
    category: string;
    taskSteps: string[];
}

export const newTaskFormInitialValues : MyFormValues= {
    name: '',
    description: '',
    category: '',
    taskSteps: [''],
};
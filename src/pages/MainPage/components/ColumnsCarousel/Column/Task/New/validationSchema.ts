// @ts-ignore
import * as Yup from 'yup';

export const newTaskFormValidationSchema = Yup.object({
    name: Yup.string()
        .required('Please set task name')
        .min(5, 'Name must be at least 5 characters')
        .max(100, 'Name must be at most 100 characters')
    ,
    description: Yup.string()
        .required('Please set task description')
        .min(5, 'Description must be at least 5 characters')
        .max(255, 'Description must be at most 255 characters')
    ,
    category: Yup.string()
        .required('Please choose task category')
    ,
    taskSteps: Yup.array().of(
        Yup.object().shape({
            name: Yup.string()
                .required('Please set task step description or remove it')
                .min(5, 'Task step must be at least 5 characters')
                .max(100, 'Task step must be at most 100 characters')
        })
    )
    ,
    createdFor: Yup.string()
            .required('Required')
    ,
});
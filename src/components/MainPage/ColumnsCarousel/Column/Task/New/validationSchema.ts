import * as Yup from 'yup';

export const newTaskFormValidationSchema = Yup.object({
    name: Yup.string()
        .required('Required')
        .min(5)
        .max(100)
    ,
    description: Yup.string()
        .required('Required')
        .min(5)
        .max(255)
    ,
    category: Yup.string()
        .required('Required')
    ,
    taskSteps: Yup.array().of(
        Yup.string()
            .required('Required')
            .min(4)
            .max(255)
    )
    ,
    taskDevelopers: Yup.array().of(
        Yup.string()
            .required('Required')
    )
    ,
});
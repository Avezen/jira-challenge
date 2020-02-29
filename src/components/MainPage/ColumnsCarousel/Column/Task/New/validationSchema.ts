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
});
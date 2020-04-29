import { FormikHelpers } from 'formik';

export type SubmitFn<T> = (values: T, actions: FormikHelpers<T>) => any;

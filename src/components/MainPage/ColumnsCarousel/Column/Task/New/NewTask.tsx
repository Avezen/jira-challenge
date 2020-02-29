import React from "react";
import {
    Formik,
    Form,
} from 'formik';
import {newTaskFormInitialValues} from "./initialValues";
import {newTaskFormValidationSchema} from "./validationSchema";
import {TaskForm} from "./TaskForm";


export const NewTask = () => (
    <div>
        <h4>
            Create new task
        </h4>
        <Formik
            initialValues={newTaskFormInitialValues}
            validationSchema={newTaskFormValidationSchema}
            onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            {({isSubmitting, values, setFieldValue, handleBlur, errors}) => (
                <Form translate="yes">
                    <TaskForm/>
                </Form>
            )}
        </Formik>
    </div>
);
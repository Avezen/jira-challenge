import React, {Component} from "react";
import {
    Formik,
    Form,
} from 'formik';
import {newTaskFormInitialValues} from "./initialValues";
import {newTaskFormValidationSchema} from "./validationSchema";
import {TaskForm} from "../TaskForm";
import {SubmitFn} from "../../../../../../../types/FormikSubmit";
import {ITaskForm} from "../../../../../../../types/ITask";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {createTask} from "../../../../../../../services/TaskService";


class NewTaskBase extends Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <h3>
                    Create new task
                </h3>
                <Formik
                    initialValues={newTaskFormInitialValues}
                    validationSchema={newTaskFormValidationSchema}
                    onSubmit={this.onRequestSave}
                >
                    {({isSubmitting, values, setFieldValue, handleBlur, errors}) => (
                        <Form translate="yes">
                            <TaskForm
                                values={values}
                                setFieldValue={setFieldValue}
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }

    onRequestSave: SubmitFn<ITaskForm> = (values, actions) => {
        const columnId = 1;
        this.setState(
            {
                sendingErrorMessage: '',
                isFetching: true,
            },
            () => {
                createTask(columnId, values).then(
                    this.onSaveSuccess(values, actions),
                    this.onSaveFailure(values, actions)
                );
            }
        );
    };

    onSaveSuccess: SubmitFn<ITaskForm> = (values, actions) => ({data}: any) => {
        const {history} = this.props;
        this.setState({sendingErrorMessage: '', isFetching: false}, () => {
            actions.setSubmitting(false);

            // history.push(`/${PUBLIC_ROUTES.MAIN}`);
        });
    };

    onSaveFailure: SubmitFn<ITaskForm> = (values, actions) => ({errors}: any) => {
        this.setState(
            {sendingErrorMessage: errors, isFetching: false},
            () => {
                actions.setSubmitting(false);
                actions.setErrors(errors);
            }
        );
    };
}

export const NewTask = withRouter(NewTaskBase);
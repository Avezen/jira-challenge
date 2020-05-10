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
import {taskApi} from "../../../../../../../api/task";
import {taskStorage} from "../../../../../../../storage/TaskStorage";
import {getTasks} from "../../../../../../../store/actions/taskActions";
import {connect} from "react-redux";

interface NewTaskProps {
    getTasks: any;
    columnId: number;
    closeModal: any;
}

class NewTaskBase extends Component<RouteComponentProps & NewTaskProps> {
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
        const {columnId} = this.props;

        this.setState(
            {
                sendingErrorMessage: '',
                isFetching: true,
            },
            () => {
                taskApi.post(columnId, values).then(
                    this.onSaveSuccess(values, actions),
                    this.onSaveFailure(values, actions)
                );
            }
        );
    };

    onSaveSuccess: SubmitFn<ITaskForm> = (values, actions) => ({columnId, payload}: any) => {
        const {closeModal, getTasks} = this.props;
        this.setState({sendingErrorMessage: '', isFetching: false}, () => {
            actions.setSubmitting(false);

            getTasks();
            closeModal();

            // taskStorage.addTask(columnId, payload);
        });
    };

    onSaveFailure: SubmitFn<ITaskForm> = (values, actions) => ({errors}: any) => {
        this.setState(
            {sendingErrorMessage: errors, isFetching: false},
            () => {
                actions.setSubmitting(false);
                actions.setErrors(errors);
                console.log('error');
            }
        );
    };
}

const NewTask = withRouter(NewTaskBase);


const mapDispatchToProps = (dispatch: any) => {
    return {
        getTasks: () => dispatch(getTasks())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NewTask);
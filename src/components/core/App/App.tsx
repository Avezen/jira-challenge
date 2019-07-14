import React from 'react';
import {connect} from 'react-redux';
import {Router, Switch, Route} from 'react-router';
import '../../../App.css';
import {history} from '../../../helpers/history';
import MainPage from "../../common/MainPage";
import {messages} from '../../../constans/messages';
import {flattenMessages} from '../../../helpers/flattenMessages';
import {IntlProvider} from "react-intl";
import Footer from "../../common/Footer";
import AddTodo from "../../../containers/AddTodo";
import VisibleTodoList from "../../../containers/VisibleTodoList";



class App extends React.Component {
    public render() {
        return (
            <IntlProvider locale="en" messages={flattenMessages(messages['br'])}>
                <React.Fragment>

                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </React.Fragment>
            </IntlProvider>
        );
    }
}

export default (App);

import React, {Component} from 'react';
// @ts-ignore
import {messages} from './constans/messages';
import {flattenMessages} from './utils/flattenMessages';
import {IntlProvider} from "react-intl";
import {DEFAULT_ROUTE, GLOBAL_ROUTES} from "./constans/routerConfig";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "./store";
import {PrivatePageWrapper} from "./wrappers/PrivatePageWrapper";
import {TransitionGroup, Transition} from "react-transition-group";
import {exit, play} from "./services/Animate";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {PublicPageWrapper} from "./wrappers/PublicPageWrapper";
import {PUBLIC_ROUTES} from "./constans/routes";
import {AboutPage} from "./pages/About/AboutPage";
import ModalProvider from "./providers/ModalProvider";


class App extends React.Component {
    public render() {
        const routeComponents = GLOBAL_ROUTES.map(
            ({Component, path, ...props}, key) =>
                <Route
                    key={key}
                    exact={path === DEFAULT_ROUTE}
                    path={path}
                    render={(routerProps) => <Component {...props} {...routerProps}/>}
                />
        );

        return (
            <Provider store={store}>
                <IntlProvider locale="en" messages={flattenMessages(messages['en'])}>
                    <ModalProvider>
                    <Router>
                        <Switch>
                            {routeComponents}
                        </Switch>
                    </Router>
                    </ModalProvider>
                </IntlProvider>
            </Provider>
        );
    }
}

export default (App);

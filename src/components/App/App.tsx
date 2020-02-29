import React, {Component} from 'react';
// @ts-ignore
import {messages} from '../../constans/messages';
import {flattenMessages} from '../../helpers/flattenMessages';
import {IntlProvider} from "react-intl";
import {DEFAULT_ROUTE, GLOBAL_ROUTES} from "../../constans/routerConfig";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "../../store";
import {PageWrapper} from "../../wrappers/PageWrapper";
import {TransitionGroup, Transition} from "react-transition-group";
import {exit, play} from "../../services/Animate";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import ModalProvider from "../../providers/ModalProvider";


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
                    <Router>
                        <PageWrapper>
                            <ModalProvider>
                                <Route
                                    render={({location}) => {
                                        const {pathname, key} = location;

                                        return (
                                            <TransitionGroup>
                                                <Transition
                                                    key={key}
                                                    appear={true}
                                                    onEnter={(node: any, appears: any) => play(pathname, node, appears)}
                                                    onExit={(node: any) => exit(node)}
                                                    timeout={{enter: 750, exit: 150}}
                                                >
                                                    <Switch location={location}>
                                                        {routeComponents}
                                                        <Route
                                                            exact={true}
                                                            path='/login'
                                                            component={() => {
                                                                window.location.href = ('http://127.0.0.1:8000/login');
                                                                return null;
                                                            }}
                                                        />
                                                    </Switch>
                                                </Transition>
                                            </TransitionGroup>
                                        )
                                    }}
                                />
                            </ModalProvider>
                        </PageWrapper>
                    </Router>
                </IntlProvider>
            </Provider>
        );
    }
}

export default (App);

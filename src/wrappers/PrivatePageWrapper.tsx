import React, {Component} from 'react';
import MainLayout from "../layouts/MainLayout";
import { Location } from 'history';
import {AppBar} from "../layouts/components/AppBar/AppBar";
import {menuItems} from "../constans/menu";
import {navigationItems} from "../constans/navigation";
import {Navigation} from "../layouts/components/Navigation/Navigation";
import {connect} from "react-redux";
import {withSecurity} from "../hoc/withSecurity";
import {LoginFormBaseProps} from "../components/LoginForm/LoginForm";
import {Redirect, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import {PUBLIC_ROUTES} from "../constans/routes";
import {isAuthenticated} from "../services/AuthService";
import {Transition, TransitionGroup} from "react-transition-group";
import {exit, play} from "../services/Animate";

export interface PageWrapperProps {
    children?: React.ReactNode;
    selectMenuItem?: any;
    fetchNavigationIfNeeded?: any;
    fetchAuthenticatedUser?: any;
    doLogout?: any;
    location?: Location;
}

class PageWrapperBase extends Component<PageWrapperProps & RouteComponentProps> {

    render() {
        const { children } = this.props;

        if (!isAuthenticated()) {
            return <Redirect to={`/${PUBLIC_ROUTES.LOGIN}`} />;
        }

        return (
            <MainLayout
                appBar={
                    <AppBar/>
                }
                navigation={
                    <Navigation
                        currentTree={'main'}
                        navigationItems={navigationItems}
                    />
                }
                pageContent={children}
            />
        );
    }
}

export const PrivatePageWrapper = withRouter(PageWrapperBase);




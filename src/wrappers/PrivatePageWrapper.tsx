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
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {PUBLIC_ROUTES} from "../constans/routes";
import {isAuthenticated} from "../services/AuthService";

export interface PageWrapperProps {
    children?: React.ReactNode;
    selectMenuItem?: any;
    fetchNavigationIfNeeded?: any;
    fetchAuthenticatedUser?: any;
    doLogout?: any;
    location?: Location;
}

class PageWrapperBase extends Component<PageWrapperProps & RouteComponentProps & LoginFormBaseProps> {

    render() {
        const { children, doLogout, authenticatedUser } = this.props;

        if (!isAuthenticated()) {
            return <Redirect to={`/${PUBLIC_ROUTES.ABOUT}`} />;
        }

        return (
            <MainLayout
                appBar={
                    <AppBar
                        menuItems={menuItems}
                        authenticatedUser={authenticatedUser}
                        logoutUser={doLogout}
                    />
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

    componentDidMount() {
        const {fetchAuthenticatedUser} = this.props;

        fetchAuthenticatedUser();
    }
}

const PageWrapperWithRouter = withRouter(PageWrapperBase);
export const PrivatePageWrapper = withSecurity(PageWrapperWithRouter);




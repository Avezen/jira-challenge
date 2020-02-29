import React, {Component} from 'react';
import MainLayout from "../layouts/MainLayout";
import { Location } from 'history';
import {AppBar} from "../components/AppBar/AppBar";
import {menuItems} from "../constans/menu";
import {authenticatedUser} from "../store/reducers/authentication";
import {navigationItems} from "../constans/navigation";
import {Navigation} from "../components/Navigation/Navigation";
import {connect} from "react-redux";
import {withSecurity} from "../components/HOC/withSecurity";
import {LoginFormBaseProps} from "../components/LoginForm/LoginForm";
import {fetchNavigationIfNeeded, selectMenuItem} from "../store/actions/fetchNavigation";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
        return (
            <MainLayout
                appBar={
                    <AppBar
                        menuItems={menuItems}
                        authenticatedUser={authenticatedUser}
                        logoutUser={doLogout}
                        handleChange={this.handleChange}
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
        const {selectMenuItem, fetchNavigationIfNeeded, fetchAuthenticatedUser} = this.props;

        let selectedMenu = this.props.location && this.props.location.pathname.split('/')[1];

        selectMenuItem(selectedMenu);
        fetchNavigationIfNeeded(selectedMenu);
        // fetchAuthenticatedUser();
    }

    handleChange = (selectedMenu: any) => {
        const {selectMenuItem, fetchNavigationIfNeeded} = this.props;

        selectMenuItem(selectedMenu);
        fetchNavigationIfNeeded(selectedMenu);
    };
}

const PageWrapperWithRouter = withRouter(PageWrapperBase);
const PageWrapperWithSecurity = withSecurity(PageWrapperWithRouter);


const mapStateToProps = (state: any) => {
    const {selectedMenu, navigationByMenu} = state;
    const {isFetching, items: navigation} = navigationByMenu[selectedMenu]
    ||
    {
        isFetching: true,
        items: []
    };

    return {
        selectedMenu,
        navigation,
        isFetching
    }
};


const mapDispatchToProps = (dispatch: any) => {
    return {
        selectMenuItem: (selectedMenu: any) => dispatch(selectMenuItem(selectedMenu)),
        fetchNavigationIfNeeded: (selectedMenu: any) => dispatch(fetchNavigationIfNeeded(selectedMenu)),
        // invalidateMenuItem: selectedMenu => dispatch(invalidateMenuItem(selectedMenu)),
    };
};


export const PageWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageWrapperWithSecurity);



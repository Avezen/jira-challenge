import React, {Component} from 'react';
import MainLayout from "../layouts/MainLayout";
import { Location } from 'history';
import {LoginFormBaseProps} from "../components/LoginForm/LoginForm";
import {RouteComponentProps, withRouter} from "react-router-dom";

export interface PageWrapperProps {
    children?: React.ReactNode;
    location?: Location;
}

class PageWrapperBase extends Component<PageWrapperProps & RouteComponentProps> {

    render() {
        const { children } = this.props;
        return (
            <MainLayout
                pageContent={children}
            />
        );
    }
}

export const PublicPageWrapper = withRouter(PageWrapperBase);




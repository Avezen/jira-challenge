import React, {Component} from 'react';
import MainLayout from "../layouts/MainLayout";
import { Location } from 'history';
import {LoginFormBaseProps} from "../components/LoginForm/LoginForm";
import {RouteComponentProps, withRouter} from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

export interface PageWrapperProps {
    children?: React.ReactNode;
    location?: Location;
}

class PageWrapperBase extends Component<PageWrapperProps & RouteComponentProps> {
    render() {
        const { children } = this.props;
        return (
            <PublicLayout
                pageContent={children}
            />
        );
    }
}

export const PublicPageWrapper = withRouter(PageWrapperBase);




import React, {Component} from 'react';
import {PageWrapper} from "../components/WRAPPERS/PageWrapper";
import {withHelmet, WithHelmetProps} from "../components/HOC/withHelmet";
import {RouteComponentProps, withRouter} from "react-router";
import {MainPageBase} from "./MainPage";

export class AdminPageBase extends Component<WithHelmetProps & RouteComponentProps> {
    render() {
        return (
            <div>
                Admin Page
            </div>
        );
    }
}

export const AdminPageWithHelmet = withHelmet(AdminPageBase);

export const AdminPage = withRouter(AdminPageWithHelmet);
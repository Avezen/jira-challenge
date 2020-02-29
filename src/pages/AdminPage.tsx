import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../components/HOC/withHelmet";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
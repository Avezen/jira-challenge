import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../../hoc/withHelmet";
import {RouteComponentProps, withRouter} from "react-router-dom";

export class AdminPageBase extends Component<WithHelmetProps & RouteComponentProps> {
    render() {
        return (
            <div
                className={'content'}
            >
                Admin Page
            </div>
        );
    }
}

export const AdminPageWithHelmet = withHelmet(AdminPageBase);

export const AdminPage = withRouter(AdminPageWithHelmet);
import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../../hoc/withHelmet";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PrivatePageWrapper} from "../../wrappers/PrivatePageWrapper";

export class AdminPageBase extends Component<WithHelmetProps & RouteComponentProps> {
    render() {
        return (
            <PrivatePageWrapper>
                <div
                    className={'content'}
                >
                    Admin Page
                </div>
            </PrivatePageWrapper>
        );
    }
}

export const AdminPageWithHelmet = withHelmet(AdminPageBase);

export const AdminPage = withRouter(AdminPageWithHelmet);
import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../../hoc/withHelmet";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {PublicPageWrapper} from "../../wrappers/PublicPageWrapper";
import {LoginForm} from "../../components/LoginForm/LoginForm";

class LoginPageBase extends Component<WithHelmetProps & RouteComponentProps> {

    render() {
        return (
            <PublicPageWrapper>
                <div
                    className={'content'}
                >
                    <div
                        className={'content--inner'}
                    >
                        <LoginForm/>
                    </div>
                </div>
            </PublicPageWrapper>
        );
    }
}

export const LoginPageWithHelmet = withHelmet(LoginPageBase);

export const LoginPage = withRouter(LoginPageWithHelmet);
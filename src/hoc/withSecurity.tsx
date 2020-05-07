import * as React from 'react';
import {connect} from "react-redux";
import {LoginFormBaseProps} from "../components/LoginForm/LoginForm";
import {getUser, logoutUser} from "../store/actions/authentication";
import {removeSessionToken, setSessionToken} from "../services/AuthStorage";
import {Redirect} from "react-router-dom";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../constans/routes";

export interface WithSecurityProps {
    messagePrefix: string;
}

export interface SecurityHOCProps {
    fetchAuthenticatedUser: any;
    authenticatedUser: any;
    setFormOpen: any;
}

export interface SecurityHOCState {
    email: string;
    password: string;
    user?: object | null;
    error?: object | null;
}

export interface InjectedSecurityProps {
    security: any;
    doAuthentication: any;
    doLogout: any;
    handleChange: any;
}

export function withSecurity<P extends WithSecurityProps | LoginFormBaseProps>(
    WrappedComponent: React.ComponentType<P>
) {
    class SecurityHOC extends React.Component<any & SecurityHOCProps, SecurityHOCState> {
        state = {
            email: 'user@user.com',
            password: 'user123',
            user: null,
            error: null,
        };

        doAuthentication = () => {
            const {email, password} = this.state;
            const {getUser} = this.props;

            getUser(email, password);
        };

        doLogout = () => {
            const { logoutUser } = this.props;

            logoutUser();
            removeSessionToken();
        };

        handleChange = (input: "email") => (e: React.FormEvent<HTMLInputElement>) => {
            this.setState({
                [input]: e.currentTarget.value
            });
        };

        render() {
            return <WrappedComponent
                {...this.props as any}
                security={this.state}
                doAuthentication={this.doAuthentication}
                doLogout={this.doLogout}
                handleChange={this.handleChange}
            />
        }
    }

    const mapStateToProps = (state: any) => {
        const {token} = state;

        if (token.token) {
            setSessionToken(token.token);
        }

        return {
            token
        }
    };

    const mapDispatchToProps = (dispatch: any) => {
        return {
            getUser: (username: any, password: any) => dispatch(getUser(username, password)),
            logoutUser: () => dispatch(logoutUser)
        };
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(SecurityHOC);
}

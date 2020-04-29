import * as React from 'react';
import {connect} from "react-redux";
import {fetchAuthenticatedUser} from "../store/actions/authentication";
import {LoginFormBaseProps} from "../components/LoginForm/LoginForm";
import {login, logout} from "../services/FetchUser";

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
    isLoading: boolean;
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
            password: 'useruser',
            isLoading: false,
            user: null,
            error: null
        };

        doAuthentication = () => {
            const {email, password} = this.state;

            this.setState(
                {isLoading: true, user: null},
                () =>
                    login({
                        email,
                        password
                    }).then(
                        this.onAuthenticationSuccess,
                        this.onAuthenticationFailure
                    )
            );
        };

        onAuthenticationSuccess = ({data}: any) => {
            const {fetchAuthenticatedUser} = this.props;
            const user = (data.success || null);

            this.setState({user, isLoading: false}, () => {
                fetchAuthenticatedUser();
            });

        };

        onAuthenticationFailure = ({response}: any) => {
            const {fetchAuthenticatedUser} = this.props;

            const error = (response.data.error || null);

            fetchAuthenticatedUser();

            this.setState({
                error,
                isLoading: false,
            });
        };

        doLogout = () => {
            logout().then(
                this.onLogoutSuccess,
                this.onLogoutFailure
            );
        };

        onLogoutSuccess = ({data}: any) => {
            const {fetchAuthenticatedUser} = this.props;
            const user = (data.success || null);

            fetchAuthenticatedUser();

            this.setState({user, isLoading: false}, () => {
                fetchAuthenticatedUser();
            });
        };

        onLogoutFailure = ({response}: any) => {
            const {fetchAuthenticatedUser} = this.props;

            const error = (response.data.error || null);

            fetchAuthenticatedUser();

            this.setState({
                error,
                isLoading: false,
            });
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
        const {authenticatedUser} = state;

        return {
            authenticatedUser
        }
    };

    const mapDispatchToProps = (dispatch: any) => {
        return {
            fetchAuthenticatedUser: () => dispatch(fetchAuthenticatedUser())
        };
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(SecurityHOC);
}

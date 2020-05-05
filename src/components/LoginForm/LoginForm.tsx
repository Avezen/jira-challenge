import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {withSecurity} from "../../hoc/withSecurity";
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import {PRIVATE_ROUTES} from "../../constans/routes";
import {isAuthenticated} from "../../services/AuthService";

export interface LoginFormBaseProps {
    closeModal: any;
    doAuthentication: any;
    doLogout: any;
    handleChange: any;
    authenticatedUser: any;
    security: any;
}

class LoginFormBase extends Component<LoginFormBaseProps> {
    render() {
        const {email, password, isLoading, user, error} = this.props.security;
        const {doAuthentication, handleChange, authenticatedUser} = this.props;

        if(isAuthenticated()){
            return <Redirect to={`/${PRIVATE_ROUTES.MAIN}`} />;
        }

        return (
                <LoginFormContainer
                    onClick={(e: any) => e.stopPropagation()}
                >
                    <Form>
                        <Form.Group
                            controlId="formBasicEmail"
                        >
                            <Form.Label>
                                Email address
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                defaultValue={email}
                                onChange={handleChange('email')}
                            />
                            <Form.Text
                                className="text-muted"
                            >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            controlId="formBasicPassword"
                        >
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                defaultValue={password}
                                onChange={handleChange('password')}
                            />
                        </Form.Group>

                        {error && <p>
                            {error}
                        </p>}

                        <LoginFormSubmitButtonContainer>
                            <Button
                                variant="primary"
                                type="button"
                                onClick={doAuthentication}
                                style={{backgroundColor: authenticatedUser.token && 'green', transition: 'all 0.3s'}}
                            >
                                {authenticatedUser.isFetching ? '' : authenticatedUser.token ? 'Success!' : 'Submit'}
                            </Button>
                        </LoginFormSubmitButtonContainer>
                    </Form>
                </LoginFormContainer>
        );
    }
}

export const LoginForm = withSecurity(LoginFormBase);



const LoginFormContainer = styled.div`
    width: 350px;
    height: 350px;
    padding: 1em;
    position: relative;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

const LoginFormCloseButton = styled.label`
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
`;

const LoginFormSubmitButtonContainer = styled.div`
    text-align: center;
    margin-top: 2em;
`;
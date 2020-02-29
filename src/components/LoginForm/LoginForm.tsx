import React, {Component} from 'react';
// @ts-ignore
import {Button, Form} from "react-bootstrap";
import {withSecurity} from "../HOC/withSecurity";
import styled, {keyframes} from "styled-components";

export interface LoginFormBaseProps {
    setFormOpen: any;
    doAuthentication: any;
    handleChange: any;
    authenticatedUser: any;
    security: any;
}

class LoginFormBase extends Component<LoginFormBaseProps> {
    closeForm = () => {
        const {setFormOpen} = this.props;
        setFormOpen(false);
    };

    render() {
        const {email, password, isLoading, user, error} = this.props.security;
        const {doAuthentication, handleChange, authenticatedUser} = this.props;

        if(authenticatedUser.user){
            this.closeForm();
        }

        return (
            <LoginModal
                onClick={this.closeForm}
            >
                <LoginFormContainer
                    onClick={(e: any) => e.stopPropagation()}
                >
                    <LoginFormCloseButton
                        onClick={this.closeForm}
                    >
                        x
                    </LoginFormCloseButton>
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
                                style={{backgroundColor: user && 'green', transition: 'all 0.3s'}}
                            >
                                {isLoading ? '' : user ? 'Success!' : 'Submit'}
                            </Button>
                        </LoginFormSubmitButtonContainer>
                    </Form>
                </LoginFormContainer>
            </LoginModal>
        );
    }
}

export const LoginForm = withSecurity(LoginFormBase);



const modalMaskOpen = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const formEnter = keyframes `
    from {
        -webkit-transform: translateY(-50px);
        -moz-transform: translateY(-50px);
        -ms-transform: translateY(-50px);
        -o-transform: translateY(-50px);
        transform: translateY(-50px);
    }
    to {
        -webkit-transform: translateY(0px);
        -moz-transform: translateY(0px);
        -ms-transform: translateY(0px);
        -o-transform: translateY(0px);
        transform: translateY(0px);
    }
`;

const LoginModal = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${modalMaskOpen} 300ms linear;

`;

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
    
    animation: ${formEnter} 300ms linear;
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
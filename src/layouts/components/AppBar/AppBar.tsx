import React, {useState} from "react";
// import logo from "../../assets/compendium.png";
import {Menu} from "../Menu/Menu";
import {LoginForm, LoginFormBaseProps} from "../../../components/LoginForm/LoginForm";
import styled from "styled-components";
import {withSecurity} from "../../../hoc/withSecurity";
import {isAuthenticated} from "../../../services/AuthStorage";
import {ModalContext} from "../../../providers/ModalProvider";
import {LoginFormModal} from "../../../components/LoginForm/LoginFormModal";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {PUBLIC_ROUTES} from "../../../constans/routes";

export interface AppBarProps {
    handleChange?: any;
    token?: any;
    logoutUser: any;
}

const AppBarBase = ({handleChange, token, doLogout, history}: AppBarProps & LoginFormBaseProps & RouteComponentProps) => {

    return (
        <ModalContext.Consumer>
            {({openModal, closeModal}) => (
                <AppBarContainer>
                    <LogoWrapper>
                        {/*<Link to={'/'}>*/}
                        <img src={''} alt={'logo'} width={160}/>
                        {/*</Link>*/}
                    </LogoWrapper>

                    <Nav>
                        <Menu/>
                    </Nav>

                    {
                        token.isFetching ? (
                            <div>loading</div>
                        ) : isAuthenticated() ? (
                            <LoginButtonWrapper>
                                <LoginButton
                                    onClick={() => {
                                        doLogout();
                                        history.push(`/${PUBLIC_ROUTES.LOGIN}`)
                                    }}
                                >
                                    <span>
                                        Log Out
                                    </span>
                                </LoginButton>
                            </LoginButtonWrapper>
                        ) : (
                            <LoginButtonWrapper>
                                <LoginButton
                                    onClick={() => openModal(
                                        <LoginFormModal
                                            closeModal={() => closeModal}
                                        />
                                    )}
                                >
                                    <span>
                                        Log In
                                    </span>
                                </LoginButton>
                            </LoginButtonWrapper>
                        )
                    }
                </AppBarContainer>
            )}
        </ModalContext.Consumer>
    );
};


const AppBarWithRouter = withRouter(AppBarBase);
export const AppBar = withSecurity(AppBarWithRouter);

const AppBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: whitesmoke;
`;


const LogoWrapper = styled.div`
    padding: 1em;
    margin-right: 2em;
`;

const Nav = styled.nav`
    width: 100%;
    height: 100%;
`;

const LoginButtonWrapper = styled.div`
    padding: 1em;
`;

const LoginButton = styled.button`
    display: inline-block;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    min-width: 100px;
`;
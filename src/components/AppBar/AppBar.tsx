import React, {useState} from "react";
// import logo from "../../assets/compendium.png";
import {Menu} from "../Menu/Menu";
import {LoginForm} from "../LoginForm/LoginForm";
import styled from "styled-components";

export interface AppBarProps {
    menuItems: any;
    handleChange?: any;
    authenticatedUser: any;
    logoutUser: any;
}

export const AppBar = ({menuItems, handleChange, authenticatedUser, logoutUser}: AppBarProps) => {

    const [formOpen, setFormOpen] = useState(false);

    return (
        <AppBarContainer>
            <LogoWrapper>
                {/*<Link to={'/'}>*/}
                <img src={''} alt={'logo'} width={160}/>
                {/*</Link>*/}
            </LogoWrapper>

            <Nav>
                <Menu
                    menuItems={menuItems}
                    handleChange={handleChange}
                />
            </Nav>

            {authenticatedUser.isFetching ? (<div>loading</div>) : authenticatedUser.user ?
                (
                    <LoginButtonWrapper>
                        <LoginButton
                            onClick={() => {
                                logoutUser()
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
                            onClick={() => setFormOpen(true)}
                        >
                            <span>
                                Log In
                            </span>
                        </LoginButton>
                    </LoginButtonWrapper>
                )
            }


            {formOpen && <LoginForm
                authenticatedUser={authenticatedUser}
                setFormOpen={setFormOpen}
            />}

        </AppBarContainer>
    );
};


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
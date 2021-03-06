import React, {Component} from 'react';
import styled from "styled-components";
import {Transition, TransitionGroup} from "react-transition-group";
import {exit, play} from "../services/Animate";
import {RouteComponentProps, withRouter} from "react-router-dom";

export interface MainLayoutProps {
    appBar?: React.ReactNode;
    navigation?: React.ReactNode;
    children?: React.ReactNode;
    pageContent?: React.ReactNode;
}

export interface MainLayoutState {
    menuToggle: boolean;
    isMobile: boolean;
}


class MainLayoutBase extends Component<MainLayoutProps & RouteComponentProps, MainLayoutState> {
    state = {
        menuToggle: false,
        isMobile: false
    };

    componentDidMount() {
        this.toggleMobile();
        window.addEventListener('resize', this.toggleMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.toggleMobile);
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            menuToggle: !prevState.menuToggle
        }));
    };

    toggleMobile = () => {
        const {isMobile} = this.state;

        if (isMobile && window.innerWidth >= 768) {
            this.setState({isMobile: false});
        } else if (!isMobile && window.innerWidth < 768) {
            this.setState({isMobile: true});
        }
    };

    render() {
        const {appBar, navigation, pageContent, location} = this.props;
        const {menuToggle, isMobile} = this.state;

        const {pathname, key} = location;

        return (
            <MainLayoutContainer>
                <Header>
                    {appBar}
                </Header>
                <Navigation
                    menuToggle={menuToggle}
                >
                    {navigation}
                </Navigation>
                <Main
                    menuToggle={menuToggle}
                    isMobile={isMobile}
                >
                    <TransitionGroup>
                        <Transition
                            key={key}
                            appear={true}
                            onEnter={(node: any, appears: any) => play(pathname, node, appears)}
                            onExit={(node: any) => exit(node)}
                            timeout={{enter: 750, exit: 150}}
                        >
                            {pageContent}
                        </Transition>
                    </TransitionGroup>
                    {menuToggle && isMobile && <Overlay/>}

                </Main>
            </MainLayoutContainer>
        );
    }
}

const MainLayout = withRouter(MainLayoutBase);

export default MainLayout;

const MainLayoutContainer = styled.div`
    display: flex;
`;

const Header = styled.header`
    width: 100%;
    height: 4em;
    position: fixed;
    z-index: 10000;
`;

const Navigation = styled.nav<{ menuToggle: boolean }>`
    width: 12em;
    display: flex;
    height: auto;
    position: fixed;
    top: 4em;
    bottom: 0;
    z-index: 1000;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow: auto;
    transform: translate(${props => props.menuToggle ? 0 : -12}em);
    transition: all 500ms;
`;

const Main = styled.main<{ menuToggle: boolean, isMobile: boolean }>`
    width: 100%;
    height: 100%;
    margin-top: 4em;
    transition: 500ms;
    margin-left: ${props => props.isMobile ? 0 : props.menuToggle ? 12 : 0}em;
    overflow: auto;
    position: absolute;
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
`;

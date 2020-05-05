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


class PublicLayoutBase extends Component<MainLayoutProps & RouteComponentProps, MainLayoutState> {

    render() {
        const {appBar, navigation, pageContent, location} = this.props;

        const {pathname, key} = location;

        return (
            <MainLayoutContainer>
                <Main>
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
                </Main>
            </MainLayoutContainer>
        );
    }
}

const PublicLayout = withRouter(PublicLayoutBase);

export default PublicLayout;

const MainLayoutContainer = styled.div`
    display: flex;
`;

const Main = styled.main`
    width: 100%;
    height: 100%;
    transition: 500ms;
    overflow: auto;
    position: absolute;
`;


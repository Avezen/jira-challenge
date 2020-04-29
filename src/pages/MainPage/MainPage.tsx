import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../../hoc/withHelmet";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import bg1 from "../../assets/backgrounds/bg1.png"
import ColumnsCarouselContainer from "./components/ColumnsCarousel/ColumnsCarouselContainer";
import ModalProvider from "../../providers/ModalProvider";


export class MainPageBase extends Component<WithHelmetProps & RouteComponentProps> {

    render() {
        return (
            <ModalProvider>
                <StyledContainer
                    fluid
                    className={'content'}
                >
                    <BackgroundImage
                        image={bg1}
                    />
                    <ContentContainer>
                        <ContentHeaderContainer>
                            <h3>
                                Project name
                            </h3>
                        </ContentHeaderContainer>
                        <ContentBodyContainer>
                            <ColumnsCarouselContainer/>
                        </ContentBodyContainer>
                    </ContentContainer>
                    {/*<FormattedMessage id="navigation.dashboard" />*/}
                </StyledContainer>
            </ModalProvider>
        );
    }
}

export const AboutPageWithHelmet = withHelmet(MainPageBase);
export const MainPage = withRouter(AboutPageWithHelmet);


const StyledContainer = styled(Container)`
    padding: 0 !important;
    
`;

const BackgroundImage = styled.div<{ image: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: 100%;
    background-repeat: no-repeat;
    position: fixed;
    z-index: -1;
`;

const StyledRow = styled(Row)`
    margin: 0 !important;
`;

const StyledCol = styled(Col)`
    padding: 0 !important;
`;

const ContentContainer = styled.div`
    padding: 2em;
`;

const ContentHeaderContainer = styled.div`
    padding: 1em;
`;

const ContentBodyContainer = styled.div`
    padding-top: 2em;
    display: flex;
`;



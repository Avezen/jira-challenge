import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../components/HOC/withHelmet";
import {RouteComponentProps, withRouter} from "react-router";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import bg1 from "../assets/backgrounds/bg1.png"
import ColumnsCarousel from "../containers/ColumnsCarousel";

const columns = [
    {
        id: 1,
        name: 'Column one',
        tasks: [
            {
                id: 1,
                name: 'Taks number one'
            },
            {
                id: 1,
                name: 'Taks number two'
            },
            {
                id: 1,
                name: 'Taks number three'
            }
        ]
    },
    {
        id: 2,
        name: 'Column two',
        tasks: [
            {
                id: 3,
                name: 'Taks number three'
            },
            {
                id: 4,
                name: 'Taks number four'
            },
            {
                id: 4,
                name: 'Taks number four'
            },
            {
                id: 4,
                name: 'Taks number four'
            },
            {
                id: 4,
                name: 'Taks number four'
            },
            {
                id: 4,
                name: 'Taks number four'
            }
        ]
    },
    {
        id: 1,
        name: 'Column one',
        tasks: [
            {
                id: 1,
                name: 'Taks number one'
            },
            {
                id: 1,
                name: 'Taks number one'
            }
        ]
    },
    {
        id: 1,
        name: 'Column one',
        tasks: [
            {
                id: 1,
                name: 'Taks number one'
            },
            {
                id: 1,
                name: 'Taks number one'
            }
        ]
    },
    {
        id: 1,
        name: 'Column one',
        tasks: [
            {
                id: 1,
                name: 'Taks number one'
            },
            {
                id: 1,
                name: 'Taks number one'
            }
        ]
    }
];

export class MainPageBase extends Component<WithHelmetProps & RouteComponentProps> {
    render() {
        return (
            <StyledContainer
                fluid
            >
                <StyledRow>
                    <StyledCol>
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
                                <ColumnsCarousel
                                    columns={columns}
                                />
                            </ContentBodyContainer>
                        </ContentContainer>
                    </StyledCol>
                </StyledRow>
                {/*<FormattedMessage id="navigation.dashboard" />*/}
            </StyledContainer>
        );
    }
}

export const MainPageWithHelmet = withHelmet(MainPageBase);

export const MainPage = withRouter(MainPageWithHelmet);


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



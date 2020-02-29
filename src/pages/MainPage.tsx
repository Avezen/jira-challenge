import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../components/HOC/withHelmet";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import bg1 from "../assets/backgrounds/bg1.png"
import ColumnsCarousel from "../containers/ColumnsCarousel";
import update from "immutability-helper";


let columns = [
    {
        id: 1,
        name: 'Column one',
        tasks: [
            {
                id: 6,
                name: 'Taks number 6'
            },
            {
                id: 7,
                name: 'Taks number 7'
            },
            {
                id: 8,
                name: 'Taks number 8'
            }
        ]
    },
    {
        id: 2,
        name: 'Column two',
        tasks: [
            {
                id: 1,
                name: 'Taks number 1'
            },
            {
                id: 2,
                name: 'Taks number 2'
            },
            {
                id: 3,
                name: 'Taks number 3'
            },
            {
                id: 4,
                name: 'Taks number 4'
            },
            {
                id: 5,
                name: 'Taks number 5'
            }
        ]
    },
    {
        id: 3,
        name: 'Column one',
        tasks: [
            {
                id: 9,
                name: 'Taks number 9'
            },
            {
                id: 10,
                name: 'Taks number 10'
            },
            {
                id: 11,
                name: 'Taks number 11'
            }
        ]
    },
    {
        id: 4,
        name: 'Column one',
        tasks: [
            {
                id: 12,
                name: 'Taks number 12'
            },
            {
                id: 13,
                name: 'Taks number 13'
            }
        ]
    },
    {
        id: 5,
        name: 'Column one',
        tasks: [
            {
                id: 14,
                name: 'Taks number 14'
            },
            {
                id: 15,
                name: 'Taks number 15'
            }
        ]
    }
];

export class MainPageBase extends Component<WithHelmetProps & RouteComponentProps> {
    state = {
        columns: columns
    };

    changeItemColumn = (hoverColumnId: number, dragItemId: number, dragItemIndex: number, dragColumnIndex: number) => {
        const {columns} = this.state;

        const hoverColumnIndex = columns.findIndex((obj) => {
            return obj.id === hoverColumnId
        });

        const dragItem = columns[dragColumnIndex].tasks[dragItemIndex];

        let updatedColumns = update(columns, {
            [dragColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [dragItemIndex, 1]
                        ],
                    }
                }
        });

        updatedColumns = update(updatedColumns, {
            [hoverColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [0, 0, dragItem],
                        ],
                    }
                }
        });

        this.setState(
            {columns: updatedColumns}
        );
    };

    moveItem = (dragColumnIndex: number, dragItemIndex: number, hoverItemIndex: number) => {
        const {columns} = this.state;

        const dragItem = columns[dragColumnIndex].tasks[dragItemIndex];

        let updatedColumns = update(columns, {
            [dragColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [dragItemIndex, 1],
                            [hoverItemIndex, 0, dragItem],
                        ],
                    }
                }
        });

        this.setState(
            {columns: updatedColumns}
        );
    };

    render() {
        const {columns} = this.state;

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
                                    moveItem={this.moveItem}
                                    changeItemColumn={this.changeItemColumn}
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



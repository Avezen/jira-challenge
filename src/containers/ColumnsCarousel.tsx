import React, {Component, createRef} from 'react';
import {Col, Row} from "react-bootstrap";
import styled from "styled-components";
import {DndProvider, useDrop} from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import ColumnItem from "../components/common/ColumnItem";


export interface ColumnsCarouselProps {
    columns: any[];
    moveItem: any;
    changeItemColumn: any;
}

export interface ColumnsCarouselState {
    currentColumn: number
}

class ColumnsCarousel extends Component<ColumnsCarouselProps, ColumnsCarouselState> {
    state = {
        currentColumn: 0,
    };

    columnRef: any = createRef();

    render() {
        const {columns, moveItem, changeItemColumn} = this.props;
        const {currentColumn} = this.state;

        const translateCarousel = (direction: any) => (e: any) => {
            if (direction === 'left') {
                this.setState(prevState => ({
                    currentColumn: prevState.currentColumn - 1
                }));
            } else {
                this.setState(prevState => ({
                    currentColumn: prevState.currentColumn + 1
                }));
            }
        };

        const isTranslateDisabled = (direction: any, currentColumn: number) => {
            if (direction === 'left') {
                return currentColumn !== 0;
            } else {
                return currentColumn < columns.length - 4;
            }
        };

        const columnTranslateByNumber = (currentColumn: number) => {
            let step = 0;
            if (this.columnRef.current) {
                step = this.columnRef.current.offsetWidth;
            }

            return -currentColumn * step;
        };

        const columnNumberByTranslate = (translate: number) => {
            let step = 0;
            if (this.columnRef.current) {
                const step = this.columnRef.current.offsetWidth;
            }

            return Math.round(translate / step - 1)
        };



        return (
            <React.Fragment>
                {isTranslateDisabled('left', currentColumn) ? (
                    <ArrowContainer
                        onClick={translateCarousel('left')}
                    >
                        left
                    </ArrowContainer>
                ) : (
                    <ArrowContainerDisabled/>
                )}

                <DndProvider backend={Backend}>
                    <ColumnsWrapper>
                        <NoWrapRow
                            translate={columnTranslateByNumber(currentColumn)}
                        >
                            {columns.map((column: any, key: any) =>
                                <Col
                                    lg={3}
                                    key={key}
                                    ref={this.columnRef}
                                >
                                    <StepColumn
                                        animate={(currentColumn - 1 === key) || (currentColumn + 4 === key)}
                                    >
                                        <ColumnItem
                                            column={column}
                                            index={key}
                                            moveItem={moveItem}
                                            changeItemColumn={changeItemColumn}
                                        />
                                    </StepColumn>
                                </Col>
                            )}
                        </NoWrapRow>
                    </ColumnsWrapper>
                </DndProvider>
                {isTranslateDisabled('right', currentColumn) ? (
                    <ArrowContainer
                        onClick={translateCarousel('right')}
                    >
                        right
                    </ArrowContainer>
                ) : (
                    <ArrowContainerDisabled/>
                )}

            </React.Fragment>
        );
    }
}

export default ColumnsCarousel;


const ArrowContainer = styled.div`
    width: 50px;
`;

const ArrowContainerDisabled = styled.div`
    width: 50px;
`;

const ColumnsWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

const NoWrapRow = styled(Row)<{ translate: number }>`
    padding: 1em;
    flex-wrap: nowrap !important; 
    -webkit-transform: translateX(${p => p.translate}px);
    -moz-transform: translateX(${p => p.translate}px);
    -ms-transform: translateX(${p => p.translate}px);
    -o-transform: translateX(${p => p.translate}px);
    transform: translateX(${p => p.translate}px);
    
    -webkit-transition: all 500ms;
    -moz-transition: all 500ms;
    -ms-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms ;
`;

const StepColumn = styled.div<{ animate: boolean }>`
    transition: opacity 400ms;
    opacity: ${p => p.animate ? 0 : 1};
`;




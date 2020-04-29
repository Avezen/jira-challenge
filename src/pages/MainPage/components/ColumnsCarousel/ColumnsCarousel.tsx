import React from 'react';
import {Col, Row} from "react-bootstrap";
import styled from "styled-components";
import {DndProvider} from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import ColumnItem from "./Column/ColumnItemContainer";


export interface ColumnsCarouselProps {
    columns: any[];
    moveItem: any;
    changeItemColumn: any;
    currentColumn: any;
    translateCarousel: (direction: string) => any;
    isTranslateDisabled: (direction: any, currentColumn: number, columnsLength: number) => boolean;
    columnTranslateByNumber: (currentColumn: number) => number;
    columnRef: any;
}


export const ColumnsCarousel = ({
                                    columns,
                                    moveItem,
                                    changeItemColumn,
                                    currentColumn,
                                    translateCarousel,
                                    isTranslateDisabled,
                                    columnTranslateByNumber,
                                    columnRef
                                }: ColumnsCarouselProps) => (
    <React.Fragment>
        {isTranslateDisabled('left', currentColumn, columns.length) ? (
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
                    {columns.length > 0 && columns.map((column: any, key: any) =>
                        <Col
                            lg={3}
                            key={key}
                            ref={columnRef}
                        >
                            <ColumnItem
                                column={column}
                                index={key}
                                moveItem={moveItem}
                                changeItemColumn={changeItemColumn}
                                currentColumn={currentColumn}
                            />
                        </Col>
                    )}
                </NoWrapRow>
            </ColumnsWrapper>
        </DndProvider>
        {isTranslateDisabled('right', currentColumn, columns.length) ? (
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

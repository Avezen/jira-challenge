import React, {Component, createRef} from 'react';
import {Col, Row} from "react-bootstrap";
import styled from "styled-components";
import {TaskItem} from "../components/common/TaskItem";

class ColumnsCarousel extends Component<{columns: any[]}> {
    state = {
        translate: 0,
    };

    columnRef: any = createRef();

    render() {
        const {columns} = this.props;
        const {translate} = this.state;

        const translateCarousel = (label: any) => (e: any) => {
            if(this.columnRef.current){

                let translateDirection = this.state.translate;


                if(label === 'left'){
                    this.setState({
                        translate: translateDirection + this.columnRef.current.offsetWidth
                    });
                }else {
                    this.setState({
                        translate: translateDirection - this.columnRef.current.offsetWidth
                    });
                }



            }

        };

        return (
            <React.Fragment>
                <ArrowContainer
                    onClick={translateCarousel('left')}
                >
                    left
                </ArrowContainer>
                <ColumnsWrapper>
                    <NoWrapRow
                        translate={translate}
                    >
                        {columns.map((column: any, key: any) =>
                            <Col
                                lg={3}
                                key={key}
                                ref={this.columnRef}
                            >
                                <StepColumn>
                                    <StepColumnHeader>
                                        <h4>
                                            {column.name}
                                        </h4>
                                    </StepColumnHeader>
                                    <StepColumnBody>
                                        <TasksListBordered>
                                            {column.tasks.map((task: any, key: any) =>
                                                <TasksListItem
                                                    key={key}
                                                >
                                                    <TaskItem
                                                        task={task}
                                                    />
                                                </TasksListItem>
                                            )}
                                            <TaskItemAddNew>
                                                <label>
                                                    +
                                                </label>
                                            </TaskItemAddNew>
                                        </TasksListBordered>
                                    </StepColumnBody>
                                </StepColumn>
                            </Col>
                        )}
                    </NoWrapRow>
                </ColumnsWrapper>
                <ArrowContainer
                    onClick={translateCarousel('right')}
                >
                    right
                </ArrowContainer>
            </React.Fragment>
        );
    }
}

export default ColumnsCarousel;



const ArrowContainer = styled.div`
    width: 50px;
`;


const ColumnsWrapper = styled.div`
    overflow: hidden;
`;

const NoWrapRow = styled(Row)<{translate: number}>`
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

const StepColumn = styled.div`
`;

const StepColumnHeader = styled.div`
    padding-left: 1em;
`;

const StepColumnBody = styled.div`
    border-radius: 5px;
    background-color: darkgray;
`;

const TasksListBordered = styled.ul`
    border: solid 1px black;
    border-radius: 5px;
    padding: 1em;
    list-style: none;
`;

const TasksListItem = styled.li`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 1em;
    margin-bottom: 1em;
`;



const TaskItemAddNew = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
`;
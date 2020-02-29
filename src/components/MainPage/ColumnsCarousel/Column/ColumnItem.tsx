import React from 'react';
import styled from "styled-components";
import {ConnectDropTarget} from "react-dnd";
import TaskItem from "./Task/TaskItemContainer";

export interface ColumnItemProps {
    column: any;
    currentColumn: any;
    moveItem: any;
    changeItemColumn: any;
    index: any;
    canDrop: boolean;
    isActive: boolean;
    connectDropTarget: ConnectDropTarget;
}


export const ColumnItem = ({
                               connectDropTarget,
                               column,
                               currentColumn,
                               isActive,
                               moveItem,
                               changeItemColumn,
                               index
                           }: ColumnItemProps) => (
    <StepColumnContainer
        ref={connectDropTarget}
        animateDisappear={(currentColumn - 1 === index) || (currentColumn + 4 === index)}
    >
        <StepColumnHeader>
            <h4>
                {column.name}
            </h4>
        </StepColumnHeader>
        <StepColumnBody>
            <TasksListBordered>
                <TasksListItem
                >
                    {isActive && (
                        <GhostAddTaskItem/>
                    )}
                </TasksListItem>
                {column.tasks.map((task: any, key: any) =>
                    <TasksListItem
                        key={task.id}
                    >
                        <TaskItem
                            index={key}
                            id={task.id}
                            moveItem={moveItem}
                            changeItemColumn={changeItemColumn}
                            task={task}
                            columnIndex={index}
                            columnId={column.id}
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
    </StepColumnContainer>
);


const StepColumnContainer = styled.div<{ animateDisappear: boolean }>`
    transition: opacity 400ms;
    opacity: ${p => p.animateDisappear ? 0 : 1};
`;

const StepColumnHeader = styled.div`
    padding-left: 1em;
`;

const StepColumnBody = styled.div`
    border-radius: 5px;
    background-color: rgba(169, 169, 169, 0.5);
`;


const TasksListBordered = styled.ul`
    border-radius: 5px;
    padding: 1em;
    list-style: none;
`;

const TasksListItem = styled.li`

`;

const GhostAddTaskItem = styled.div`
    width: 100%;
    height: 100px;
    border: solid 1px lightgrey;
    margin-bottom: 1em;
`;

const TaskItemAddNew = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
`;
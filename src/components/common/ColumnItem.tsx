import React, {useState} from 'react';
import styled from "styled-components";
import {ConnectDropTarget, DropTarget, DropTargetConnector, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import TaskItem, {TaskItemProps} from "./TaskItem";
import update from 'immutability-helper';

export interface ColumnItemProps {
    column: any;
    moveItem: any;
    changeItemColumn: any;
    index: any;
    canDrop: boolean;
    isOver: boolean;
    connectDropTarget: ConnectDropTarget;
}


const ColumnItem: React.FC<ColumnItemProps> = ({
                                                   column,
                                                   moveItem,
                                                   changeItemColumn,
                                                   index,
                                                   canDrop,
                                                   isOver,
                                                   connectDropTarget,
                                               }) => {
    const isActive = canDrop && isOver;


    return (
        <div ref={connectDropTarget}>
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
        </div>
    )
};

export default DropTarget(
    'task',
    {
        drop: ({column}: { column: any }) => ({column}),
    },
    (connect: DropTargetConnector, monitor: DropTargetMonitor, item) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: item.column.id !== (monitor.getItem() && monitor.getItem().columnId),
    }),
)(ColumnItem)


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
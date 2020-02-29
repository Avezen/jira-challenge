import React from 'react';
import {ConnectDropTarget, DropTarget, DropTargetConnector, DropTargetMonitor} from "react-dnd";
import {ColumnItem} from "./ColumnItem";

export interface ColumnItemProps {
    column: any;
    currentColumn: any;
    moveItem: any;
    changeItemColumn: any;
    index: any;
    canDrop: boolean;
    isOver: boolean;
    connectDropTarget: ConnectDropTarget;
}


const ColumnItemContainer: React.FC<ColumnItemProps> = ({
                                                   column,
                                                   currentColumn,
                                                   moveItem,
                                                   changeItemColumn,
                                                   index,
                                                   canDrop,
                                                   isOver,
                                                   connectDropTarget,
                                               }) => {
    const isActive = canDrop && isOver;

    return (
        <ColumnItem
            column={column}
            moveItem={moveItem}
            changeItemColumn={changeItemColumn}
            index={index}
            canDrop={canDrop}
            isActive={isActive}
            connectDropTarget={connectDropTarget}
            currentColumn={currentColumn}
        />
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
)(ColumnItemContainer)

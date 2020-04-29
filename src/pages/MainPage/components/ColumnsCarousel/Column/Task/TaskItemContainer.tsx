import React, {useImperativeHandle, useRef} from 'react';
import {
    ConnectDragSource,
    ConnectDropTarget,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    DropTarget, DropTargetConnector, DropTargetMonitor,
    XYCoord
} from "react-dnd";
import {TaskItem} from "./TaskItem";


export interface TaskItemProps {
    id: any
    index: number
    moveItem: (dragColumnIndex: number, dragItemIndex: number, hoverItemIndex: number) => void
    changeItemColumn: any;
    task: any;
    columnId: any;
    columnIndex: any;

    isDragging: boolean
    connectDragSource: ConnectDragSource
    connectDropTarget: ConnectDropTarget
}

interface TaskItemInstance {
    getNode(): HTMLDivElement | null
}

const TaskItemContainer = React.forwardRef<HTMLDivElement, TaskItemProps>(
    ({task, isDragging, connectDragSource, connectDropTarget}, ref) => {
        const elementRef = useRef(null);
        connectDragSource(elementRef);
        connectDropTarget(elementRef);

        const opacity = isDragging ? 0 : 1;
        useImperativeHandle<{}, TaskItemInstance>(ref, () => ({
            getNode: () => elementRef.current,
        }));

        return (
            <TaskItem
                elementRef={elementRef}
                task={task}
                isDragging={isDragging}
            />
        )
    },
);

export default DropTarget(
    'task',
    {
        hover(
            props: TaskItemProps,
            monitor: DropTargetMonitor,
            component: TaskItemInstance,
        ) {
            if (!component) {
                return null
            }
            // node = HTML Div element from imperative API
            const node = component.getNode();
            if (!node) {
                return null
            }

            const dragItemIndex = monitor.getItem().index;
            const hoverItemIndex = props.index;
            const dragColumnIndex = monitor.getItem().columnIndex;
            const hoverColumnIndex = props.columnIndex;

            // Don't replace items while hovering another column
            if(dragColumnIndex !== hoverColumnIndex){
                return
            }

            // Don't replace items with themselves
            if (dragItemIndex === hoverItemIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = node.getBoundingClientRect();

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragItemIndex < hoverItemIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragItemIndex > hoverItemIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            props.moveItem(dragColumnIndex, dragItemIndex, hoverItemIndex);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            monitor.getItem().index = hoverItemIndex
        },
    },
    (connect: DropTargetConnector) => ({
        connectDropTarget: connect.dropTarget(),
    }),
)(
    DragSource(
        'task',
        {
            beginDrag: (props: TaskItemProps) => ({
                id: props.id,
                index: props.index,
                columnId: props.columnId,
                columnIndex: props.columnIndex
            }),
            endDrag(props: TaskItemProps, monitor: DragSourceMonitor) {
                const item = monitor.getItem();
                const dropResult = monitor.getDropResult();

                if(dropResult && monitor.getItem().columnId !== dropResult.column.id){
                    props.changeItemColumn(dropResult.column.id, item.id, item.index, item.columnIndex);

                }
            },
        },
        (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    )(TaskItemContainer),
)


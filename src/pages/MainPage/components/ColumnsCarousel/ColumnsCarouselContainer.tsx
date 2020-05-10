import React, {Component, createRef} from 'react';
import {ColumnsCarousel} from "./ColumnsCarousel";
import update from "immutability-helper";
import {storage, storageType} from "../../../../storage";
import {isObjectEmpty} from "../../../../utils";
import {connect} from "react-redux";
import {getTasks} from "../../../../store/actions/taskActions";
import {taskStorage} from "../../../../storage/TaskStorage";
import {taskApi} from "../../../../api/task";
import {store} from "../../../../store";

let columns = [
    {
        id: 1,
        name: 'Column one',
        description: '',
        tasks: [
            {
                id: 6,
                name: 'Task number six tra ta ta ta extender lorem impum ',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            },
            {
                id: 8,
                name: 'Task number 8',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            }
        ]
    },
    {
        id: 2,
        name: 'Column two',
        tasks: [
            {
                id: 1,
                name: 'Task number 1',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            },
            {
                id: 2,
                name: 'Task number 2',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            }
        ]
    },
    {
        id: 3,
        name: 'Column three',
        tasks: [
            {
                id: 9,
                name: 'Task number 9',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            },
            {
                id: 10,
                name: 'Task number 10',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            }
        ]
    },
    {
        id: 4,
        name: 'Column four',
        tasks: [
            {
                id: 12,
                name: 'Task number 12',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            },
            {
                id: 13,
                name: 'Task number 13',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            }
        ]
    },
    {
        id: 5,
        name: 'Column five',
        tasks: [
            {
                id: 14,
                name: 'Task number 14',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            },
            {
                id: 15,
                name: 'Task number 15',
                description: 'Task description',
                category: 'BUG',
                steps: [
                    'Task step number one',
                    'Task step number two',
                    'Task step number three',
                ],
                developers: [
                    1,2
                ],
                createdBy: 1
            }
        ]
    }
];

export interface ColumnsCarouselProps {
    getTasks: any;
    tasks: any[];
    error?: object;
}

export interface ColumnsCarouselState {
    items: any[];
    currentItem: number;
    error?: object;
}

class ColumnsCarouselContainer extends Component<ColumnsCarouselProps, ColumnsCarouselState> {
    state = {
        items: storage.getObject(storageType.COLUMNS),
        currentItem: 0,
        error: [],
    };

    itemRef: any = createRef();

    componentDidMount() {
        const {getTasks} = this.props;

        getTasks();
    }

    componentDidUpdate(prevProps: any) {
        const {tasks, error} = this.props;

        if (tasks !== prevProps.tasks) {
            this.setState({items: tasks ? tasks : storage.getObject(storageType.COLUMNS)});
        }

        if (error !== prevProps.error) {
            this.setState({error}, () => {
                if(!isObjectEmpty(this.state.error)){
                    alert('Unauthorized - using app in offline mode')
                }
            });
        }
    }

    render() {
        const {items, currentItem} = this.state;

        return (
            <ColumnsCarousel
                columns={items}
                currentColumn={currentItem}
                columnRef={this.itemRef}
                moveItem={this.moveItem}
                changeItemColumn={this.changeItemColumn}
                translateCarousel={this.translateCarousel}
                isTranslateDisabled={this.isTranslateDisabled}
                columnTranslateByNumber={this.itemTranslateByNumber}
            />
        );
    }

    changeItemColumn = (destinationColumnId: number, sourceItemId: number, sourceItemIndex: number, sourceColumnIndex: number) => {
        const {items} = this.state;

        taskStorage.changeTaskColumn(items, destinationColumnId, sourceColumnIndex, sourceItemIndex);
        const updatedColumns = storage.getObject(storageType.COLUMNS);

        this.setState(
            {items: updatedColumns}
        );

        const sourceItem = items[sourceColumnIndex].tasks[sourceItemIndex];

        taskApi.updateStage(sourceItem.id, destinationColumnId).then(
            () => {
                storage.setObject(storageType.COLUMNS_REVERT, updatedColumns);
            }
        ).catch(
            () => {
                const storageRevert = storage.getObject(storageType.COLUMNS_REVERT);
                storage.setObject(storageType.COLUMNS, storage.getObject(storageType.COLUMNS_REVERT));

                this.setState(
                    {items: storageRevert}
                );
            }
        );
    };

    moveItem = (sourceColumnIndex: number, sourceItemIndex: number, hoverItemIndex: number) => {
        const {items} = this.state;

        taskStorage.moveTask(items, sourceColumnIndex, sourceItemIndex, hoverItemIndex);

        const updatedColumns = storage.getObject(storageType.COLUMNS);

        this.setState(
            {items: updatedColumns}
        );
    };

    translateCarousel = (direction: any) => (e: React.MouseEvent<HTMLInputElement>) => {
        // e.target as HTMLInputElement
        if (direction === 'left') {
            this.setState(prevState => ({
                currentItem: prevState.currentItem - 1
            }));
        } else {
            this.setState(prevState => ({
                currentItem: prevState.currentItem + 1
            }));
        }
    };

    isTranslateDisabled = (direction: any, currentColumn: number, columnsLength: number) => {
        if (direction === 'left') {
            return currentColumn !== 0;
        } else {
            return currentColumn < columnsLength - 4;
        }
    };

    itemTranslateByNumber = (currentColumn: number) => {
        let step = 0;
        if (this.itemRef.current) {
            step = this.itemRef.current.offsetWidth;
        }

        return -currentColumn * step;
    };

    itemNumberByTranslate = (translate: number) => {
        let step = 0;
        if (this.itemRef.current) {
            const step = this.itemRef.current.offsetWidth;
        }

        return Math.round(translate / step - 1)
    };
}

const mapStateToProps = (state: any) => {
    const {tasks} = state;

    return {
        tasks: tasks.data,
        error: tasks.error
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getTasks: () => dispatch(getTasks())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColumnsCarouselContainer);
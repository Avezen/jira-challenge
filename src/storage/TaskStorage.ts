import update from "immutability-helper";
import {storage, storageType} from "./index";

const getColumnIndexById = (items: any, columnId: any) => {
    return items.findIndex((obj: any) => {
        return obj.id === columnId
    });
};

export const taskStorage = {
    changeTaskColumn(items: any, destinationColumnId: any, sourceColumnIndex: any, sourceItemIndex: any) {
        const destinationColumnIndex = getColumnIndexById(items, destinationColumnId);

        const dragItem = items[sourceColumnIndex].tasks[sourceItemIndex];

        let updatedColumns = update(items, {
            [sourceColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [sourceItemIndex, 1]
                        ],
                    }
                }
        });

        updatedColumns = update(updatedColumns, {
            [destinationColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [0, 0, dragItem],
                        ],
                    }
                }
        });

        storage.setObject(storageType.COLUMNS, updatedColumns);
    },
    moveTask (items: any, sourceColumnIndex: any, sourceItemIndex: any, destinationItemIndex: any) {
        const dragItem = items[sourceColumnIndex].tasks[sourceItemIndex];

        let updatedColumns = update(items, {
            [sourceColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [sourceItemIndex, 1],
                            [destinationItemIndex, 0, dragItem],
                        ],
                    }
                }
        });

        storage.setObject(storageType.COLUMNS, updatedColumns);
    },
    addTask (columnId: any, payload: any) {
        const items = storage.getObject(storageType.COLUMNS);
        const destinationColumnIndex = getColumnIndexById(items, columnId);

        let updatedColumns = update(items, {
            [destinationColumnIndex]:
                {
                    tasks: {
                        $push: [payload],
                    }
                }
        });

        storage.setObject(storageType.COLUMNS, updatedColumns);
    },
};
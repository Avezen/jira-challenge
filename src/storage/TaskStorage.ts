import update from "immutability-helper";
import {storage, storageType} from "./index";

export const taskStorage = {
    changeTaskColumn(items: any, destinationColumnId: any, sourceColumnIndex: any, sourceItemIndex: any) {
        const destinationColumnIndex = items.findIndex((obj: any) => {
            return obj.id === destinationColumnId
        });

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
};
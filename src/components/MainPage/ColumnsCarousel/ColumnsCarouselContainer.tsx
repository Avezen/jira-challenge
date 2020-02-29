import React, {Component, createRef} from 'react';
import {ColumnsCarousel} from "./ColumnsCarousel";
import update from "immutability-helper";

let columns = [
    {
        id: 1,
        name: 'Column one',
        tasks: [
            {
                id: 6,
                name: 'Taks number six tra ta ta ta extender lorem impum '
            },
            {
                id: 7,
                name: 'Taks number 7'
            },
            {
                id: 8,
                name: 'Taks number 8'
            }
        ]
    },
    {
        id: 2,
        name: 'Column two',
        tasks: [
            {
                id: 1,
                name: 'Taks number 1'
            },
            {
                id: 2,
                name: 'Taks number 2'
            },
            {
                id: 3,
                name: 'Taks number 3'
            },
            {
                id: 4,
                name: 'Taks number 4'
            },
            {
                id: 5,
                name: 'Taks number 5'
            }
        ]
    },
    {
        id: 3,
        name: 'Column one',
        tasks: [
            {
                id: 9,
                name: 'Taks number 9'
            },
            {
                id: 10,
                name: 'Taks number 10'
            },
            {
                id: 11,
                name: 'Taks number 11'
            }
        ]
    },
    {
        id: 4,
        name: 'Column one',
        tasks: [
            {
                id: 12,
                name: 'Taks number 12'
            },
            {
                id: 13,
                name: 'Taks number 13'
            }
        ]
    },
    {
        id: 5,
        name: 'Column one',
        tasks: [
            {
                id: 14,
                name: 'Taks number 14'
            },
            {
                id: 15,
                name: 'Taks number 15'
            }
        ]
    }
];

export interface ColumnsCarouselProps {
    columns: any[];
    moveItem: any;
    changeItemColumn: any;
}

export interface ColumnsCarouselState {
    items: any;
    currentItem: number;
}

class ColumnsCarouselContainer extends Component<{}, ColumnsCarouselState> {
    state = {
        items: columns,
        currentItem: 0,
    };
    itemRef: any = createRef();

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

    
    changeItemColumn = (hoverColumnId: number, dragItemId: number, dragItemIndex: number, dragColumnIndex: number) => {
        const {items} = this.state;

        const hoverColumnIndex = items.findIndex((obj) => {
            return obj.id === hoverColumnId
        });

        const dragItem = items[dragColumnIndex].tasks[dragItemIndex];

        let updatedColumns = update(items, {
            [dragColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [dragItemIndex, 1]
                        ],
                    }
                }
        });

        updatedColumns = update(updatedColumns, {
            [hoverColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [0, 0, dragItem],
                        ],
                    }
                }
        });

        this.setState(
            {items: updatedColumns}
        );
    };

    moveItem = (dragColumnIndex: number, dragItemIndex: number, hoverItemIndex: number) => {
        const {items} = this.state;

        const dragItem = items[dragColumnIndex].tasks[dragItemIndex];

        let updatedColumns = update(items, {
            [dragColumnIndex]:
                {
                    tasks: {
                        $splice: [
                            [dragItemIndex, 1],
                            [hoverItemIndex, 0, dragItem],
                        ],
                    }
                }
        });

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

export default ColumnsCarouselContainer;
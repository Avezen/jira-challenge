import React from 'react';
import styled from "styled-components";
import {UserCircle} from "../../../../common/UserCircle";
import {DisplayTaskModal} from "./DisplayTaskModal";
import {ModalContext} from '../../../../../providers/ModalProvider';
import avatar1 from "../../../../../assets/avatars/avatar1.jpg";
import avatar2 from "../../../../../assets/avatars/avatar2.jpg";


export interface TaskItemProps {
    elementRef: any
    task: any;
    isDragging: boolean
}


const developers = {
    createdBy: {
        id: 1,
        name: 'user1',
        avatar: avatar1
    },
    createdFor: [
        {
            id: 1,
            name: 'user1',
            avatar: avatar1
        },
        {
            id: 2,
            name: 'user2',
            avatar: avatar2
        }
    ]
};

export const TaskItem = ({
                             task,
                             elementRef,
                             isDragging
                         }: TaskItemProps) => (
    <ModalContext.Consumer>
        {({openModal, closeModal}) => (
            <TaskItemContainer
                ref={elementRef}
                style={{opacity: isDragging ? 0 : 1}}
                onClick={() => openModal(
                    <DisplayTaskModal
                        closeModal={closeModal}
                        task={task}
                        developers={developers}
                    />
                )}
            >
                <TaskItemHeader>
                    <h5>
                        {task.name}
                    </h5>
                    <ItemCategorySpan>
                        <small>
                            BUG
                        </small>
                    </ItemCategorySpan>
                </TaskItemHeader>
                <TaskItemBody>
                    <div className="date">
                        12:48 12-08
                    </div>
                    <UsersWrapper>
                        <UserCircleWrapper
                            left
                        >
                            <UserCircle
                                user={developers.createdBy}
                            />
                        </UserCircleWrapper>
                        <RightArrow/>
                        <RightArrow/>
                        <RightArrow/>
                        {developers.createdFor.map((item: any, key: any) => (
                            <UserCircleWrapper
                                right
                            >
                                <UserCircle
                                    user={item}
                                />
                            </UserCircleWrapper>
                        ))}
                    </UsersWrapper>
                </TaskItemBody>
            </TaskItemContainer>
        )}
    </ModalContext.Consumer>
);


const TaskItemContainer = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 1em;
    cursor: move;
`;

const TaskItemHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1em;
`;

const ItemCategorySpan = styled.span`
    background-color: red;
    border-radius: 5px;
    padding: 0 6px 2px 6px;
    margin-left: 1em;
`;

const TaskItemBody = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const UsersWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const RightArrow = styled.i`
    height: 100%;
    border: solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 8px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-left: -9px;
`;

const UserCircleWrapper = styled.div<{ left?: boolean, right?: boolean }>`
    margin: ${p => p.left ? '0 4px 0 0' : p.right ? '0 0 0 7px' : ''};
    
    &:nth-child(n+6) {
          margin: ${p => p.right ? '0 0 0 -30px' : ''};
    }
`;
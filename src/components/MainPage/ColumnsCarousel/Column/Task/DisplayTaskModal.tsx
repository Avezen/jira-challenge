import React from 'react';
import styled from "styled-components";
import {ModalWrapper} from "../../../../../wrappers/ModalWrapper";
import {UserCircle} from "../../../../common/UserCircle";


export const DisplayTaskModal = ({closeModal, task}: { closeModal: any, task: any }) => (
    <ModalWrapper
        closeModal={closeModal}
    >
        <DisplayTaskModalContainer>
            <TaskHeader>
                <h4>
                    {task.name}
                </h4>
                <TaskCategorySpan>
                    <small>
                        BUG
                    </small>
                </TaskCategorySpan>
            </TaskHeader>

            <TaskBody>
                <TaskDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </TaskDescription>
                <TaskSteps>
                    <TaskStep>
                        <input type={'checkbox'}/>
                        Step number one
                    </TaskStep>
                    <TaskStep>
                        <input type={'checkbox'}/>
                        Step number two
                    </TaskStep>
                    <TaskStep>
                        <input type={'checkbox'}/>
                        Step number three
                    </TaskStep>
                </TaskSteps>
            </TaskBody>

            <hr/>

            <TaskFooter>
                <UsersWrapper>
                    <UserCircleWrapper left>
                        <UserCircle/>
                    </UserCircleWrapper>
                    created at
                    <CreatedAt>
                        12:48 12-08
                    </CreatedAt>
                    for
                    <UserCircleWrapper
                        right
                    >
                        <UserCircle/>
                    </UserCircleWrapper>
                </UsersWrapper>
            </TaskFooter>
        </DisplayTaskModalContainer>
    </ModalWrapper>
);


const DisplayTaskModalContainer = styled.div`
    width: 400px;
`;

const TaskHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1em;
`;

const TaskCategorySpan = styled.span`
    background-color: red;
    border-radius: 5px;
    padding: 0 6px 2px 6px;
    margin-left: 1em;
`;

const TaskBody = styled.div`
`;

const TaskDescription = styled.p`
    margin-bottom: 1em;
`;

const TaskSteps = styled.ul`
    list-style: none;
    padding-left: .5em;
    margin-bottom: 2em;
`;

const TaskStep = styled.li`
  
`;

const TaskFooter = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

const UsersWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const UserCircleWrapper = styled.div<{ left?: boolean, right?: boolean }>`
    margin: ${p => p.left ? '0 8px 0 0' : p.right ? '0 0 0 8px' : ''}
`;

const CreatedAt = styled.b`
    margin: 0 5px 0 5px;
`;
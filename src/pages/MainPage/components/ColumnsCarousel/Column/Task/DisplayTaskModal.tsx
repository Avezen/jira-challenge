import React from 'react';
import styled from "styled-components";
import {ModalWrapper} from "../../../../../../wrappers/ModalWrapper";
import {UserCircle} from "../../../../../../components/common/UserCircle";


export const DisplayTaskModal = ({closeModal, task, developers}: { closeModal: any, task: any, developers: any }) => {
    console.log(task);
    return (
        <ModalWrapper
            closeModal={closeModal}
            width={400}
        >
            <DisplayTaskModalContainer>
                <TaskHeader>
                    <h4>
                        {task.name}
                    </h4>
                    <TaskCategorySpan>
                        <small>
                            {task.category}
                        </small>
                    </TaskCategorySpan>
                </TaskHeader>

                <TaskBody>
                    <TaskDescription>
                        {task.description}
                    </TaskDescription>
                    <TaskSteps>
                        {task.steps.map((step: string, key: number) => (
                            <TaskStep
                                key={key}
                            >
                                <input type={'checkbox'}/>
                                {step}
                            </TaskStep>
                        ))}
                    </TaskSteps>
                </TaskBody>

                <hr/>

                <TaskFooter>
                    <UsersWrapper>
                        <UserCircleWrapper left>
                            <UserCircle
                                user={developers.createdBy}
                            />
                        </UserCircleWrapper>
                        created at
                        <CreatedAt>
                            12:48 12-08
                        </CreatedAt>
                        for
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
                </TaskFooter>
            </DisplayTaskModalContainer>
        </ModalWrapper>
    );
}


const DisplayTaskModalContainer = styled.div`
    width: 100%;
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
    margin: ${p => p.left ? '0 4px 0 0' : p.right ? '0 0 0 7px' : ''};
    
    &:nth-child(n+4) {
          margin: ${p => p.right ? '0 0 0 -30px' : ''};
    }
`;

const CreatedAt = styled.b`
    margin: 0 5px 0 5px;
`;
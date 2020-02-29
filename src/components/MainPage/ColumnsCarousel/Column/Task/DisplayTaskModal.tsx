import React from 'react';
import styled from "styled-components";
import {ModalWrapper} from "../../../../../wrappers/ModalWrapper";


export const DisplayTaskModal = ({closeModal, task}: { closeModal: any, task: any }) => (
    <ModalWrapper
        closeModal={closeModal}
    >
        <DisplayTaskModalContainer>
            {task.name}
        </DisplayTaskModalContainer>
    </ModalWrapper>
);

const DisplayTaskModalContainer = styled.div`
    width: 350px;
    height: 350px;
`;

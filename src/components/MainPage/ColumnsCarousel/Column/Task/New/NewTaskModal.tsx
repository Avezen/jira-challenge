import React from 'react';
import styled from "styled-components";
import {ModalWrapper} from "../../../../../../wrappers/ModalWrapper";
import {NewTask} from "./NewTask";


export const NewTaskModal = ({closeModal}: { closeModal: any }) => (
    <ModalWrapper
        closeModal={closeModal}
    >
        <DisplayTaskModalContainer>
            <NewTask/>
        </DisplayTaskModalContainer>
    </ModalWrapper>
);


const DisplayTaskModalContainer = styled.div`
    width: 400px;
`;

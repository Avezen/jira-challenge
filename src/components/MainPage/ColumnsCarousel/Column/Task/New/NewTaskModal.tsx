import React from 'react';
import {ModalWrapper} from "../../../../../../wrappers/ModalWrapper";
import {NewTask} from "./NewTask";


export const NewTaskModal = ({closeModal}: { closeModal: any }) => (
    <ModalWrapper
        closeModal={closeModal}
        width={500}
    >
        <NewTask/>
    </ModalWrapper>
);

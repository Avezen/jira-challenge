import React from 'react';
import {ModalWrapper} from "../../../../../../../wrappers/ModalWrapper";
import {NewTask} from "./NewTask";


export const NewTaskModal = ({closeModal, columnId}: { closeModal: any, columnId: any }) => (
    <ModalWrapper
        closeModal={closeModal}
        width={500}
    >
        <NewTask
            columnId={columnId}
        />
    </ModalWrapper>
);

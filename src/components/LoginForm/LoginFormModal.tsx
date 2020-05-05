import React from 'react';
import {LoginForm} from "./LoginForm";
import {ModalWrapper} from "../../wrappers/ModalWrapper";


export const LoginFormModal = ({closeModal}: { closeModal: any }) => (
    <ModalWrapper
        closeModal={closeModal}
        width={400}
    >
        <LoginForm
            closeModal={closeModal}
        />
    </ModalWrapper>
);

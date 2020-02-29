import React from 'react';
import styled, {keyframes} from "styled-components";


export const ModalWrapper = ({children, closeModal}: { children: any, closeModal: any }) => (
    <ModalContainer
        onClick={closeModal}
    >
        <Modal
            onClick={(e: any) => e.stopPropagation()}
        >
            <ModalCloseButton
                onClick={closeModal}
            >
                x
            </ModalCloseButton>
            {children}
        </Modal>
    </ModalContainer>
);


const modalMaskOpen = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const modalEnter = keyframes`
    from {
        -webkit-transform: translateY(-50px);
        -moz-transform: translateY(-50px);
        -ms-transform: translateY(-50px);
        -o-transform: translateY(-50px);
        transform: translateY(-50px);
    }
    to {
        -webkit-transform: translateY(0px);
        -moz-transform: translateY(0px);
        -ms-transform: translateY(0px);
        -o-transform: translateY(0px);
        transform: translateY(0px);
    }
`;

const ModalContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    animation: ${modalMaskOpen} 300ms linear;

`;

const Modal = styled.div`
    padding: 2em;
    position: relative;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    
    animation: ${modalEnter} 300ms linear;
`;

const ModalCloseButton = styled.label`
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
`;

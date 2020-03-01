import React from 'react';
import styled, {keyframes} from "styled-components";


export const ModalWrapper = ({children, closeModal, width}: { children: any, closeModal: any, width?: any }) => (
    <ModalContainer
        onClick={closeModal}
    >
        <Modal
            onClick={(e: any) => e.stopPropagation()}
            width={width}
        >
            {/*<ModalCloseButton*/}
                {/*onClick={closeModal}*/}
            {/*>*/}
                {/*x*/}
            {/*</ModalCloseButton>*/}
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
        -webkit-transform: translateY(-10px);
        -moz-transform: translateY(-10px);
        -ms-transform: translateY(-10px);
        -o-transform: translateY(-10px);
        transform: translateY(-10px);
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
    overflow-y: scroll;

    height: 100vh;
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    //display: flex;
    //align-items: center;
    //justify-content: center;
    z-index: 1000;
    top: 2em;

    animation: ${modalMaskOpen} 200ms linear;
`;

const Modal = styled.div<{width?: any}>`
    margin: 6em auto;
    width: ${p => p.width ? p.width : 400}px;

    padding: 2em;
    position: relative;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    
    animation: ${modalEnter} 200ms linear;
`;

const ModalCloseButton = styled.label`
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
`;

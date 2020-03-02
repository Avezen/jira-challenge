import React from "react";
import styled from "styled-components";


export const Button = ({type, children, onClick, secondary}: { type: any, children: any, secondary?: boolean, onClick?: any }) => (
    <StyledButton
        type={type}
        onClick={onClick}
        secondary={secondary}
    >
        {children}
    </StyledButton>
);


const StyledButton = styled.button<{secondary?: boolean}>`
    border: ${p => p.secondary ? 'solid 1px #fb6ee0' : 'none'};
    border-radius: 4px;
    color: ${p => p.secondary ? '#fb6ee0' : '#FFF'};
    background-color: ${p => p.secondary ? '#FFF' : '#fb6ee0'};
    padding: 5px 1.5em 5px 1.5em;
    
    &:hover {
      background-color: #c95ab2;
      color: #FFF;
    }
`;
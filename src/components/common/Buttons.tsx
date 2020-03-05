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
    border: ${p => p.secondary ? 'solid 1px #689cee' : 'none'};
    border-radius: 4px;
    color: ${p => p.secondary ? '#689cee' : '#FFF'};
    background-color: ${p => p.secondary ? '#FFF' : '#689cee'};
    padding: 5px 1.5em 5px 1.5em;
    
    &:hover {
      background-color: #6381ce;
      color: #FFF;
    }
`;
import React from "react";
import {Field} from "formik";
import styled from "styled-components";
import {StyledErrorMessage} from "../styled";

export const ListItemInput = ({name, index, removeItem, placeholder}: {name: any, index: any, removeItem: any, placeholder?: any}) => (
    <ListItemInputContainer>
        <Field
            name={`${name}[${index}]`}
        >
            {({field}: { field: any }) => (
                <StyledListItemInput>
                    <StyledInput
                        {...field}
                        type={'text'}
                        placeholder={placeholder}
                    />
                    <RemoveButton
                        type={'button'}
                        onClick={() => removeItem(index)}
                    >
                    </RemoveButton>
                </StyledListItemInput>
            )}
        </Field>
        <StyledErrorMessage
            name={`${name}[${index}]`}
            component={'div'}
        />
    </ListItemInputContainer>
);

const ListItemInputContainer = styled.div`
    margin-bottom: .5em;
`;

const StyledListItemInput = styled.div`
    display: flex;
`;

const StyledInput = styled.input`
    width: 100%;
`;

const RemoveButton = styled.button`
    height: 35px;
    width: 35px;
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: white;
    color: white;
    
    &:after {
        position: absolute;
        top: 5px;
        bottom: 0;
        left: 0;
        right: 0;
        content: "\\274c"; /* use the hex value here... */
        font-size: 16px; 
        color: black;
        text-align: center;
        
        &:hover {
            color: grey;
        }
    }
`;

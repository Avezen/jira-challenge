import React from 'react';
import {CheckboxInput} from "./CheckboxInput";
import styled from "styled-components";
import {FormFieldContainer, StyledErrorMessage, StyledLabel} from "../styled";

export const CheckboxGroup = ({checkboxes, disabled, name, errors, placeholder}: {checkboxes: any, disabled?: any, name: any, errors?: any, placeholder: any}) => (
    <FormFieldContainer>
        <StyledLabel
            htmlFor={name}
        >
            {placeholder}
        </StyledLabel>
        <RadiosContainer
            id={name}
        >
            {checkboxes.map((checkbox: any, key: any) => (
                <CheckboxInput
                    key={key}
                    name={name}
                    disabled={disabled}
                    value={checkbox}
                    errors={errors}
                />
            ))}
        </RadiosContainer>
        <StyledErrorMessage
            name={name}
            component={'div'}
        />
    </FormFieldContainer>
);


const RadiosContainer = styled.div`
    display: flex;
`;

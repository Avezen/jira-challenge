import React from 'react';
import {ErrorMessage} from "formik";
import {CheckboxInput} from "./CheckboxInput";
import styled from "styled-components";

export const CheckboxGroup = ({checkboxes, disabled, name, errors, placeholder}: {checkboxes: any, disabled?: any, name: any, errors?: any, placeholder: any}) => (
    <RadioGroupContainer>
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
    </RadioGroupContainer>
);

const RadioGroupContainer = styled.div`
    margin-bottom: 1em;
`;

const StyledLabel = styled.label`
    
`;

const RadiosContainer = styled.div`
    display: flex;
`;

const StyledInput = styled.input`
    width: 100%;
`;

const StyledErrorMessage = styled(ErrorMessage)`
    
`;
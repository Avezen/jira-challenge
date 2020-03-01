import React from 'react';
import {ErrorMessage} from "formik";
import {RadioInput} from "./RadioInput";
import styled from "styled-components";

export const RadioGroup = ({radios, disabled, name, errors, placeholder}: {radios: any, disabled?: any, name: any, errors?: any, placeholder: any}) => (
    <RadioGroupContainer>
        <StyledLabel
            htmlFor={name}
        >
            {placeholder}
        </StyledLabel>
        <RadiosContainer
            id={name}
        >
            {radios.map((item: any, key: any) => (
                <RadioInput
                    key={key}
                    name={name}
                    disabled={disabled}
                    value={item}
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
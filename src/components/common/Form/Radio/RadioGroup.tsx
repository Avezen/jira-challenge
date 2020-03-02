import React from 'react';
import {RadioInput} from "./RadioInput";
import styled from "styled-components";
import {FormFieldContainer, StyledErrorMessage, StyledLabel} from "../styled";

export const RadioGroup = ({radios, disabled, name, errors, placeholder}: {radios: any, disabled?: any, name: any, errors?: any, placeholder: any}) => (
    <FormFieldContainer>
        <StyledLabel
            htmlFor={name}
        >
            {placeholder}
        </StyledLabel>
        <RadiosContainer
            id={name}
        >
            {radios.map((radio: any, key: any) => (
                <RadioInput
                    key={key}
                    name={name}
                    disabled={disabled}
                    radio={radio}
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
import React from 'react';
import {ErrorMessage, Field} from "formik";
import styled from "styled-components";

export const RadioInput = ({name, disabled, value, errors}: { name: any, disabled?: any, value: any, errors?: any }) => (
    <RadioContainer>
        <StyledLabel
            htmlFor={`${name}-${value}-radio`}
        >
            {value}
            <Field
                name={name}
            >
                {({field, form, meta}: { field: any, form: any, meta: any }) => (
                    <React.Fragment>
                        <StyledInput
                            {...field}
                            type={'radio'}
                            name={name}
                            id={`${name}-${value}-radio`}
                            disabled={disabled}
                            value={value}
                        />
                    </React.Fragment>
                )}
            </Field>
            <StyledSpan
                className={`radio-check ${errors && errors[name] ? 'invalid' : ''}`}
            ></StyledSpan>
        </StyledLabel>
    </RadioContainer>
);

const RadioContainer = styled.div`
`;

const StyledLabel = styled.label`
    
`;

const StyledInput = styled.input`
    width: 100%;
`;

const StyledSpan = styled.span`
    
`;

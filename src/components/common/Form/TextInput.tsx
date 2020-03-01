import React from "react";
import {ErrorMessage, Field} from "formik";
import styled from "styled-components";

export const TextInput = ({name, placeholder, disabled, errors}: {name: any, placeholder: any, disabled?: any, errors?: any}) => (
    <TextInputContainer>
        <StyledLabel
            htmlFor={name}
        >
            {placeholder}
        </StyledLabel>
        <Field
            name={name}
        >
                {({field, form, meta}: { field: any, form: any, meta: any }) => (
                <React.Fragment>
                    <StyledInput
                        {...field}
                        type={'text'}
                        placeholder={placeholder}
                    />
                    {/*{meta.touched && meta.error && meta.error}*/}
                </React.Fragment>
            )}
        </Field>
        <StyledErrorMessage
            name={name}
            component={'div'}
        />
    </TextInputContainer>
);

const TextInputContainer = styled.div`
    margin-bottom: 1em;
`;

const StyledLabel = styled.label`
    
`;

const StyledInput = styled.input`
    width: 100%;
`;

const StyledErrorMessage = styled(ErrorMessage)`
    
`;
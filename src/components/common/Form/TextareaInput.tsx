import React from "react";
import {Field} from "formik";
import styled from "styled-components";
import {FormFieldContainer, StyledErrorMessage, StyledLabel} from "./styled";

export const TextareaInput = ({name, placeholder, disabled, errors}: {name: any, placeholder: any, disabled?: any, errors?: any}) => (
    <FormFieldContainer>
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
                    <StyledTextarea
                        cols={3}
                        {...field}
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
    </FormFieldContainer>
);


const StyledTextarea = styled.textarea`
    width: 100%;
`;

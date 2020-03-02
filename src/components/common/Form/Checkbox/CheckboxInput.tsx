import React from 'react';
import {Field} from "formik";
import styled from "styled-components";

export const CheckboxInput = ({name, disabled, value, errors}: { name: any, disabled?: any, value: any, errors?: any }) => (
    <RadioContainer>
        <StyledLabel
            htmlFor={`${name}-${value.id}-checkbox`}
        >
            <Field
                name={name}
            >
                {({field, form, meta}: { field: any, form: any, meta: any }) => (
                        <StyledInput
                            {...field}
                            type={'checkbox'}
                            name={name}
                            id={`${name}-${value.id}-checkbox`}
                            disabled={disabled}
                            value={value.id}
                            checked={field.value.includes(value.id)}
                            onChange={() => {
                                if (field.value.includes(value.id)) {
                                    const nextValue = field.value.filter(
                                        (fieldValue: any) => fieldValue !== value.id
                                    );
                                    form.setFieldValue(name, nextValue);
                                } else {
                                    const nextValue = field.value.concat(value.id);
                                    form.setFieldValue(name, nextValue);
                                }
                            }}
                        />
                )}
            </Field>
            <StyledSpan
                className={`checkbox-check ${errors && errors[name] ? 'invalid' : ''}`}
                avatar={value.avatar}
            ></StyledSpan>
        </StyledLabel>
    </RadioContainer>
);

const RadioContainer = styled.div`
`;

const StyledInput = styled.input`
    width: 100%;
`;

const StyledLabel = styled.label`
    display: block;
    flex-direction: column;
    position: relative;
    padding-right: .5em;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    &:hover input ~ span {
        background-color: #ccc;
    }

    & input:checked ~ span {
        border: solid 2px black;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
    }
    //
    //& input:checked ~ span:after {
    //    display: block;
    //}
    //
    //& span:after {
    //    left: 31px;
    //    top: 0;
    //    width: 5px;
    //    height: 10px;
    //    border: solid black;
    //    border-width: 0 3px 3px 0;
    //    -webkit-transform: rotate(45deg);
    //    -ms-transform: rotate(45deg);
    //    transform: rotate(45deg);
    //}
`;

const StyledSpan = styled.span<{avatar?: any}>`
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    display: block;
    border: solid 1px black;
    border-radius: 50%;
    background-image: url(${p => p.avatar ? p.avatar : ''});
    background-size: cover;
    background-repeat: no-repeat;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;



import React from 'react';
import {ErrorMessage, Field} from "formik";
import styled from "styled-components";

export const RadioInput = ({name, disabled, radio, errors}: { name: any, disabled?: any, radio: any, errors?: any }) => (
    <RadioContainer>
        <StyledLabel
            htmlFor={`${name}-${radio.name}-radio`}
        >

            <Field
                name={name}
            >
                {({field}: { field: any }) => (
                    <StyledInput
                        {...field}
                        type={'radio'}
                        name={name}
                        id={`${name}-${radio.name}-radio`}
                        disabled={disabled}
                        value={radio.name}
                    />
                )}
            </Field>
            <StyledSpan
                className={`radio-check ${errors && errors[name] ? 'invalid' : ''}`}
                color={radio.color}
            >
                <small>
                    {radio.name}
                </small>
            </StyledSpan>
        </StyledLabel>
    </RadioContainer>
);

const RadioContainer = styled.div`
    
`;

const StyledLabel = styled.label`
    display: block;
    position: relative;
    padding-right: 1em;
    margin-bottom: 12px;
    cursor: pointer;
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
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    
    & input:checked ~ span {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    
    & input:checked ~ span:after {
        display: block;
    }
    
    & span:after {
        right: 16px;
        top: -2px;
        width: 5px;
        height: 10px;
        border: solid black;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

const StyledSpan = styled.span<{ color?: any }>`
    border-radius: 5px;
    padding: 0 6px 2px 6px;
    background-color: ${p => p.color ? p.color : 'grey'};
    
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

const StyledInput = styled.input`
    width: 100%;
`;

//
//
// const StyledLabel = styled.label`
//     display: block;
//     position: relative;
//     padding-left: 35px;
//     margin-bottom: 12px;
//     cursor: pointer;
//     font-size: 22px;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//
//     & input{
//         position: absolute;
//         opacity: 0;
//         cursor: pointer;
//         height: 0;
//         width: 0;
//     }
//
//     &:hover input ~ span {
//         background-color: #ccc;
//     }
//
//     & input:checked ~ span {
//         background-color: #2196F3;
//     }
//
//     & input:checked ~ span:after {
//         display: block;
//     }
//
//     & span:after {
//         left: 9px;
//         top: 5px;
//         width: 5px;
//         height: 10px;
//         border: solid white;
//         border-width: 0 3px 3px 0;
//         -webkit-transform: rotate(45deg);
//         -ms-transform: rotate(45deg);
//         transform: rotate(45deg);
//     }
// `;
//
// const StyledSpan = styled.span`
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 25px;
//     width: 25px;
//     background-color: #eee;
//
//     &:after {
//         content: "";
//         position: absolute;
//         display: none;
//     }
// `;


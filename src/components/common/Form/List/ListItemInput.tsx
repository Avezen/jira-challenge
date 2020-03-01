import React from "react";
import {ErrorMessage, Field} from "formik";
import styled from "styled-components";

export const ListItemInput = ({name, index, removeItem, placeholder}: {name: any, index: any, removeItem: any, placeholder?: any}) => (
    <ListItemInputContainer>
        <Field
            name={`${name}[${index}]`}
        >
            {({field, form, meta}: { field: any, form: any, meta: any }) => (
                <StyledListItemInput>
                    <StyledInput
                        {...field}
                        type={'text'}
                    />
                    <button
                        type={'button'}
                        onClick={() => removeItem(index)}
                    >
                        remove
                    </button>
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

const StyledErrorMessage = styled(ErrorMessage)`
    
`;
import React, {useState} from "react";
import {ListItemInput} from "./ListItemInput";
import styled from "styled-components";
import {ErrorMessage} from "formik";


export const ListGroup = ({name, placeholder, taskSteps, setFieldValue}: { name: any, placeholder: any, taskSteps: any, setFieldValue: any }) => {
    const addNewItem = () => {
        setFieldValue('taskSteps', [...taskSteps, ''])
    };

    const removeItem = (index: any) => {
        taskSteps.splice(index, 1);
        setFieldValue('taskSteps', [...taskSteps])
    };

    return (
        <ListGroupContainer>
            <StyledLabel
                htmlFor={name}
            >
                {placeholder}
            </StyledLabel>
            <button
                type={'button'}
                onClick={addNewItem}
            >
                Add new
            </button>
            <ListContainer
                id={name}
            >
                {taskSteps.length > 0 && taskSteps.map((item: any, key: any) => (
                    <ListItemInput
                        key={key}
                        name={name}
                        index={key}
                        removeItem={removeItem}
                    />
                ))}
            </ListContainer>
        </ListGroupContainer>
    );
};

const ListGroupContainer = styled.div`
    margin-bottom: 1em;
`;

const StyledLabel = styled.label`
    
`;

const ListContainer = styled.div`
`;

const StyledErrorMessage = styled(ErrorMessage)`
    
`;
import React from "react";
import {ListItemInput} from "./ListItemInput";
import styled from "styled-components";
import {FormFieldContainer, StyledLabel} from "../styled";
import {Button} from "../../Buttons";


export const ListGroup = ({name, placeholder, listItemPlaceholder, taskSteps, setFieldValue}: { name: any, placeholder: any, listItemPlaceholder: any, taskSteps: any, setFieldValue: any }) => {
    const addNewItem = () => {
        setFieldValue('taskSteps', [...taskSteps, ''])
    };

    const removeItem = (index: any) => {
        taskSteps.splice(index, 1);
        setFieldValue('taskSteps', [...taskSteps])
    };

    return (
        <FormFieldContainer>
            <ListHeader>
                <StyledLabel
                    htmlFor={name}
                >
                    {placeholder}
                </StyledLabel>
                <Button
                    type={'button'}
                    onClick={addNewItem}
                    secondary
                >
                    Add new
                </Button>
            </ListHeader>
            <ListContainer
                id={name}
            >
                {taskSteps.length > 0 && taskSteps.map((item: any, key: any) => (
                    <ListItemInput
                        key={key}
                        name={name}
                        index={key}
                        placeholder={listItemPlaceholder}
                        removeItem={removeItem}
                    />
                ))}
            </ListContainer>
        </FormFieldContainer>
    );
};

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: .5em;
`;


const ListContainer = styled.div`
`;

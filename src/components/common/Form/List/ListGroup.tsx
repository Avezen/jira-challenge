import React from "react";
import {ListItemInput} from "./ListItemInput";
import styled from "styled-components";
import {FormFieldContainer, StyledLabel} from "../styled";
import {Button} from "../../Buttons";


export const ListGroup = ({name, placeholder, listItemPlaceholder, steps, setFieldValue}: { name: any, placeholder: any, listItemPlaceholder: any, steps: any, setFieldValue: any }) => {
    const addNewItem = () => {
        setFieldValue(name, [...steps, ''])
    };

    const removeItem = (index: any) => {
        steps.splice(index, 1);
        setFieldValue(name, [...steps])
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
                {steps.length > 0 && steps.map((item: any, key: any) => (
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

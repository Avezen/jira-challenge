import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import {TextInput} from "../../../../../../components/common/Form/TextInput";
import {RadioGroup} from "../../../../../../components/common/Form/Radio/RadioGroup";
import {ListGroup} from "../../../../../../components/common/Form/List/ListGroup";
import {TextareaInput} from "../../../../../../components/common/Form/TextareaInput";
import {CheckboxGroup} from "../../../../../../components/common/Form/Checkbox/CheckboxGroup";
import avatar1 from "../../../../../../assets/avatars/avatar1.jpg";
import avatar2 from "../../../../../../assets/avatars/avatar2.jpg";
import {Button} from "../../../../../../components/common/Buttons";

const categories = [
    {
        id: 1,
        name: 'BUG',
        color: 'red'
    },
    {
        id: 2,
        name: 'FEATURE',
        color: 'green'
    },
    {
        id: 2,
        name: 'SMALLFIX',
        color: 'yellow'
    }
];

const developers = [
    {
        id: 1,
        name: 'user1',
        avatar: avatar1
    },
    {
        id: 2,
        name: 'user2',
        avatar: avatar2
    }
];

export const TaskForm = ({values, setFieldValue}: { values: any, setFieldValue: any }) => (
    <Row>
        <Col lg={12}>
            <TextInput
                name={'name'}
                placeholder={'Name'}
            />
        </Col>

        <Col lg={12}>
            <TextareaInput
                name={'description'}
                placeholder={'Description'}
            />
        </Col>

        <Col lg={12}>
            <RadioGroup
                name={'category'}
                placeholder={'Category'}
                radios={categories}
            />
        </Col>

        <Col lg={12}>
            <ListGroup
                name={'steps'}
                placeholder={'Task Steps'}
                listItemPlaceholder={'Task step description'}
                steps={values.steps}
                setFieldValue={setFieldValue}
            />
        </Col>

        <Col lg={12}>
            <CheckboxGroup
                name={'developers'}
                placeholder={'Task Developers'}
                checkboxes={developers}
            />
        </Col>

        <Col lg={12}>
            <SubmitButtonContainer>
                <Button
                    type={'submit'}
                >
                    Submit
                </Button>
            </SubmitButtonContainer>
        </Col>
    </Row>
);

const SubmitButtonContainer = styled.div`
    text-align: right;
`;

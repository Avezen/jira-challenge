import React from "react";
import {
    Field,
} from 'formik';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import {TextInput} from "../../../../../common/Form/TextInput";
import {RadioGroup} from "../../../../../common/Form/Radio/RadioGroup";
import {ListGroup} from "../../../../../common/Form/List/ListGroup";



export const TaskForm = ({values, setFieldValue} : {values: any, setFieldValue: any}) => (
    <Row>
        <Col lg={12}>
            <TextInput
                name={'name'}
                placeholder={'Name'}
            />
        </Col>

        <Col lg={12}>
            <TextInput
                name={'description'}
                placeholder={'Description'}
            />
        </Col>

        <Col lg={12}>
            <RadioGroup
                name={'category'}
                placeholder={'Category'}
                radios={['yes', 'no']}
            />
        </Col>

        <Col lg={12}>
            <ListGroup
                name={'taskSteps'}
                placeholder={'Task Steps'}
                taskSteps={values.taskSteps}
                setFieldValue={setFieldValue}
            />
        </Col>

        <Col lg={12}>
            <button type="submit">
                Submit
            </button>
        </Col>
    </Row>
);

const StyledField = styled.div`
    margin-bottom: 1em;
`;

const StyledInput = styled.input`
    width: 100%;
`;
import React from "react";
import {
    Field,
} from 'formik';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";



export const TaskForm = () => (
    <Row>
        <Col lg={12}>
            <Field
                name="name"
                render={({field, form, meta}: { field: any, form: any, meta: any }) => (
                    <StyledField>
                        <StyledInput type="text" {...field} placeholder="Name"/>
                        {meta.touched && meta.error && meta.error}
                    </StyledField>
                )}
            />
        </Col>

        <Col lg={12}>
            <Field
                name="description"
                render={({field, form, meta}: { field: any, form: any, meta: any }) => (
                    <StyledField>
                        <StyledInput type="text" {...field} placeholder="Description"/>
                        {meta.touched && meta.error && meta.error}
                    </StyledField>
                )}
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
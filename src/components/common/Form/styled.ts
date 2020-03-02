import styled from "styled-components";
import {ErrorMessage} from "formik";

export const StyledLabel = styled.label`
    font-size: 18px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 14px;
    font-weight: 200;
`;

export const FormFieldContainer = styled.div`
    margin-bottom: 1em;
`;
import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.span`
    color: red;
    display: block;
    margin:0 auto;
    text-align: center;
`;

const ErrorMessage = () => {
    return <StyledErrorMessage>Something went wrong</StyledErrorMessage>
};

export default ErrorMessage;
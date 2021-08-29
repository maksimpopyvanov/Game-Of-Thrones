import React from 'react';
import styled from 'styled-components';
import img from './error.jpg';

const StyledErrorMessage = styled.span`
    display: block;
    margin:0 auto;
    text-align: center;
`;

const StyledErrorPic = styled.img`
    width: 100%;
    margin-bottom: 5px;
`;

const ErrorMessage = () => {
    return (
        <>
            <StyledErrorPic src={img} alt="error"></StyledErrorPic>
            <StyledErrorMessage>Something went wrong</StyledErrorMessage>
        </>
    )
};

export default ErrorMessage;
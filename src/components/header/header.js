import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: #fff;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;

`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    list-style-type: none;

`;

const HeaderLinksItem = styled.li`
    margin-right: 20px;
    font-size: 18px;
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <HeaderLinksItem>
                    <Link to='/characters/'>Characters</Link>
                </HeaderLinksItem>
                <HeaderLinksItem>
                <Link to='/houses/'>Houses</Link>
                </HeaderLinksItem>
                <HeaderLinksItem>
                    <Link to='/books/'>Books</Link>  
                </HeaderLinksItem>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;
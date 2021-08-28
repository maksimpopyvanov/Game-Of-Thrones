import React from 'react';
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
                <a href="#">
                Game of Thrones DB
                </a>
            </HeaderTitle>
            <HeaderLinks>
                <HeaderLinksItem>
                    <a href="#">Characters</a>
                </HeaderLinksItem>
                <HeaderLinksItem>
                    <a href="#">Houses</a>
                </HeaderLinksItem>
                <HeaderLinksItem>
                    <a href="#">Books</a>   
                </HeaderLinksItem>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;
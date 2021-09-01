import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

const StyledButton = styled(Button)`
    margin-bottom: 20px;
`;

export default class App extends Component {

    state = {
        showRandomChar: false,
        error: false
    }

    componentDidCatch() {
        console.log('Error');
        this.setState({error: true});
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <StyledButton onClick = {this.toggleRandomChar} color="primary">Toggle random character</StyledButton>
                        </Col>
                    </Row>
                <CharacterPage/>
                
                </Container>
            </>
        );
    }
}
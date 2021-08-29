import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';

const StyledButton = styled(Button)`
    margin-bottom: 20px;
`;

export default class App extends Component {

    state = {
        showRandomChar: false,
        selectedChar: null,
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

    onSelectedChar = (id) => {
        this.setState({
            selectedChar: id
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
                    <Row>
                        <Col md='6'>
                            <ItemList onSelectedChar={this.onSelectedChar}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
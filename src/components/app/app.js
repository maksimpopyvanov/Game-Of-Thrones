import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import { CharactersPage, CharactersItem } from '../pages/characterPage';
import { BooksPage, BooksItem } from '../pages/booksPage';
import {HousesPage, HousesItem } from '../pages/housesPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const StyledButton = styled(Button)`
    margin-bottom: 20px;
`;

const StyledApp = styled.div`
    background: url('../../../public/img/got.jpg') center center no-repeat;
    background-size: cover;
    min-height: 100vh;
    height: 100%;
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
            <Router>
                <StyledApp> 
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
                        <Route path='/characters' exact component={CharactersPage}/>
                        <Route path='/houses' exact component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/characters/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <CharactersItem characterId={id}/>
                            }
                        }/>
                        <Route path='/houses/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <HousesItem houseId={id}/>
                            }
                        }/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>
                            }
                        }/>
                    </Container>
                </StyledApp>
            </Router>
        );
    }
}
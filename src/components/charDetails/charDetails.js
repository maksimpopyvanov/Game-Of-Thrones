import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const CharDetailsTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const StyledRequest = styled.span`
    color: white;
`;

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updeteChar();
    }

    componentDidUpdate(prevProps) {

        if(this.props.charId !== prevProps.charId) {
            this.updeteChar();
        }
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        })
    }

    onError = () => {
        this.setState({
            error:true,
            loading:false
        })
    }

    updeteChar() {
        const {charId} = this.props;

        if(!charId) {
            return;
        }

        this.setState({
            loading: true,
            error: false
        });

        this.gotService.getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const { char, loading, error } = this.state;

        if (!char && !loading && !error) {
            return <StyledRequest>Please select a character</StyledRequest>
        }

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = (!error && !loading) ? <View char = {char}/> : null;
        return (
            <CharDetailsBlock className = "rounded">
                {spinner}
                {errorMessage}
                {content}
            </CharDetailsBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char,
          noData = "no data";
    return(
        <>
            <CharDetailsTitle>{name || noData}</CharDetailsTitle>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender || noData}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born || noData}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died || noData}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture || noData}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}
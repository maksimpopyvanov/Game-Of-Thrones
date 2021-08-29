import React, {Component} from 'react';
import styled from 'styled-components'; 
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services';


const StyledListGroupItem = styled(ListGroupItem)`
    cursor: pointer;
`;

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then(charList => {
                this.setState({
                    charList
                })
            });
    }


    render() {
        return (
             
            <ListGroup>
                <StyledListGroupItem>
                    John Snow
                </StyledListGroupItem>
                <StyledListGroupItem>
                    Brandon Stark
                </StyledListGroupItem>
                <StyledListGroupItem>
                    Geremy
                </StyledListGroupItem>
            </ListGroup>
            
        );
    }
}

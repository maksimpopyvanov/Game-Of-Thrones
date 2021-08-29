import React, {Component} from 'react';
import styled from 'styled-components'; 
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services';
import Spinner from '../spinner';


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

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <StyledListGroupItem key = {item.url}
                                     onClick={() => this.props.onSelectedChar(201 + i)}>
                    {item.name}
                </StyledListGroupItem>
            )
        });
    }


    render() {
        const {charList} = this.state;

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}

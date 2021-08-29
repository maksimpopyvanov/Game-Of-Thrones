import React, {Component} from 'react';
import styled from 'styled-components'; 
import { ListGroup, ListGroupItem } from 'reactstrap'
import Spinner from '../spinner';


const StyledListGroupItem = styled(ListGroupItem)`
    cursor: pointer;
`;

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then(itemList => {
                this.setState({
                    itemList
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
        const {itemList} = this.state;

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}

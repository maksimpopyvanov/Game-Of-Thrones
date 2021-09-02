import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';

const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const ItemDetailsTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Term = styled.span`
    font-weight: bold;
`;

const StyledRequest = styled.span`
    color: white;
`;

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field] || "no data"}</span>
        </ListGroupItem>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updeteItem();
    }

    componentDidUpdate(prevProps) {

        if(this.props.itemId !== prevProps.itemId) {
            this.updeteItem();
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
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

    updeteItem() {
        const { itemType, itemId } = this.props;

        if(!itemId || !itemType) {
            return;
        }

        this.setState({
            loading: true,
            error: false
        });

        switch(itemType) {
            case 'character':
                this.gotService.getCharacter(itemId)
                .then(this.onItemLoaded)
                .catch(this.onError);
                break;
            case 'house':
                this.gotService.getHouse(itemId)
                .then(this.onItemLoaded)
                .catch(this.onError);
                break;
            case 'book' :
                this.gotService.getBook(itemId)
                .then(this.onItemLoaded)
                .catch(this.onError);
                break;
            default: return;
        }
    }      
        
    render() {
        const { item, loading, error } = this.state;

        if (!item && !loading && !error) {
            return <StyledRequest>Please select a item</StyledRequest>
        }

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = (!error && !loading) ? <View item = {item} children = {this.props.children}/> : null;
        return (
            <ItemDetailsBlock className = "rounded">
                {spinner}
                {errorMessage}
                {content}
            </ItemDetailsBlock>
        );
    }
}

const View = ({item, children}) => {
    const {name} = item;
    return(
        <>
            <ItemDetailsTitle>{name || "noData"}</ItemDetailsTitle>
            <ListGroup className="list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item});
                    })
                }
            </ListGroup>
        </>
    );
}
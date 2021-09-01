import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services';
import RowBlock from '../../rowBlock';

export default class BooksPage extends Component {

    state = {
        selectedBook: null,
        error: false
    }

    gotService = new GotService();

    componentDidCatch() {
        console.log('Error');
        this.setState({error: true});
    }

    onSelectedBook = (id) => {
        this.setState({
            selectedBook: id
        });
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
        <ItemList onItemSelected={this.onSelectedBook}
                  getData={this.gotService.getAllBooks}
                  renderItem = { ({name}) => `${name}`}/>
        )

        const bookDetails = (
            <ItemDetails itemType = 'book' itemId={this.state.selectedBook}>
                <Field field='authors' label='Authors'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='country' label='Country'/>
            </ItemDetails>
        )

        return (
            <RowBlock itemList={itemList} itemDetails={bookDetails}/>
        )
    }
}
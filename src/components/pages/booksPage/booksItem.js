import React, {Component} from 'react';
import GotService from '../../../services';
import ItemDetails, {Field} from '../../itemDetails';

export default class BooksItem extends Component {

    gotService = new GotService();

    render() {
        return(
            <ItemDetails itemType = 'book' itemId={this.props.bookId}>
                <Field field='authors' label='Authors'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='country' label='Country'/>
            </ItemDetails>
        )
    }
}
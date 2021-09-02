import React, {Component} from 'react';
import GotService from '../../../services';
import ItemDetails, {Field} from '../../itemDetails';

export default class CharactersItem extends Component {

    gotService = new GotService();

    render() {
        return(
            <ItemDetails itemType = 'character' itemId={this.props.characterId}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
    }
}
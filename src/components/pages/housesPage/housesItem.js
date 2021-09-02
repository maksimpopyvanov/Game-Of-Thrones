import React, {Component} from 'react';
import GotService from '../../../services';
import ItemDetails, {Field} from '../../itemDetails';

export default class HousesItem extends Component {

    gotService = new GotService();

    render() {
        return(
            <ItemDetails itemType = 'house' itemId={this.props.houseId}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
            </ItemDetails>
        )
    }
}
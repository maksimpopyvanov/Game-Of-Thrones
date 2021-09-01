import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services';
import RowBlock from '../../rowBlock';

export default class HousesPage extends Component {

    state = {
        selectedHouse: null,
        error: false
    }

    gotService = new GotService();

    componentDidCatch() {
        console.log('Error');
        this.setState({error: true});
    }

    onSelectedHouse = (id) => {
        this.setState({
            selectedHouse: id
        });
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
        <ItemList onItemSelected={this.onSelectedHouse}
                  getData={this.gotService.getAllHouses}
                  renderItem = { ({name}) => `${name}`}/>
        )

        const houseDetails = (
            <ItemDetails itemType = 'house' itemId={this.state.selectedHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
            </ItemDetails>
        )

        return (
            <RowBlock itemList={itemList} itemDetails={houseDetails}/>
        )
    }
}
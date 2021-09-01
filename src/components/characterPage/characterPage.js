import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {

    state = {
        selectedChar: null,
        error: false
    }

    gotService = new GotService();

    componentDidCatch() {
        console.log('Error');
        this.setState({error: true});
    }

    onSelectedChar = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
        <ItemList onItemSelected={this.onSelectedChar}
                  getData={this.gotService.getAllCharacters}
                  renderItem ={ ({name, gender}) => `${name} (${gender})`}/>
        )

        const charDetails = (
            <ItemDetails itemType = 'character' itemId={this.state.selectedChar}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock itemList={itemList} itemDetails={charDetails}/>
        )
    }
}

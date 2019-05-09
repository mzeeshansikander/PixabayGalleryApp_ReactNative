import React, { Component } from 'react';
import { View,Text,TouchableOpacity,AsyncStorage} from 'react-native';
import { connect } from 'react-redux'
import actions from '../actions/FavouriteAction'
import CustomButtonGroup from '../components/CustomButtonGroup'
import FavouriteList from '../components/FavouriteList'


const mapStateToProps = ({ FavouriteScreen }) => {
    return {
        view: FavouriteScreen.view,
        picsList: FavouriteScreen.picsList,
    }
}
export class FavouriteScreen extends Component {


    static navigationOptions = {
        headerTitle: 'Images Browswer',
    }
    componentWillMount(){
        const { view, handleToggleView } = this.props
        handleToggleView('Grid');

        AsyncStorage.getItem('name', (error, result) => {
            if (result) {
                this.setState({ fav: JSON.parse(result) })
                console.log(result.length, 'Data from Storage')
            }
        });
        
    }

    // componentWillMount() {

        
    // }


    constructor(props) {
        super(props)
        const { fetchPics } = this.props
        //  fetchPics()
        this.state = {
            fav: []
        }
        this.toggleView = this.toggleView.bind(this)
        
    }
    
    toggleView() {
        const { view, handleToggleView } = this.props
        
        if (view === 'List') {
            handleToggleView('Grid')
        } else {
            handleToggleView('List')
        }
    }

    render() {
        const { view } = this.props
        return (
        <View>
            <CustomButtonGroup handlePress={this.toggleView} />
            <FavouriteList view={view} picsList={this.state.fav} navigation={this.props.navigation} /> 
        </View>
        )
    }
}


export default connect(mapStateToProps, actions)(FavouriteScreen)

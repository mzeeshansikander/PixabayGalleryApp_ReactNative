import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import actions from '../actions/GalleryAction'
import CustomSearchBar from '../components/CustomSearchBar'
import CustomButtonGroup from '../components/CustomButtonGroup'
import GalleryList from '../components/GalleryList';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const mapStateToProps = ({ GalleryScreen }) => {
    return {
        view: GalleryScreen.view,
        picsList: GalleryScreen.picsList,
    }
}
export class GalleryScreen extends Component {

    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Images Browswer',
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('Favourite')}
                    type="clear"
                    icon={
                        <FontAwesome
                            name="heart"
                            size={25}
                            color="red"
                        />
                    }
                />


            ),
        }
    }


    toggleView() {
        const { view, handleToggleView } = this.props

        if (view === 'List') {

            handleToggleView('Grid')

        } else if (view === 'Grid') {
            handleToggleView('List')
        }
    }

    handleSearch(searchQuery) {
        const { handlePicsSearch } = this.props
        handlePicsSearch(searchQuery)
    }

    render() {
        const { view } = this.props
        return (
            <View>
                <CustomSearchBar handleSearch={this.handleSearch} />
                <CustomButtonGroup handlePress={this.toggleView} />
                <GalleryList view={view} picsList={this.props.picsList} navigation={this.props.navigation} />

            </View>
        )
    }
}


export default connect(mapStateToProps, actions)(GalleryScreen)

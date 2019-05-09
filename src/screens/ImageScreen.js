import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

export class ImageScreen extends Component {

    constructor() {
        super()

        this.state = {
            imageURI: '',
            loaded: false,
            fav: [],
            favColor: true,
        }
    }
    componentWillMount() {
        AsyncStorage.getItem('name', (error, result) => {
            if (result)
                this.setState({ fav: JSON.parse(result) })
        });
    }

    static navigationOptions = {
        headerTitle: 'Images Browser'
    }
    saveToFavourite = (item) => {
        this.setState({
            favColor: !this.state.favColor
        })
        let array = this.state.fav;
        array.push(item);
        AsyncStorage.setItem('name', JSON.stringify(array));
    }
    fetchSaved = () => {
        AsyncStorage.getItem('favList')
            .then(data => { alert(data) });
    }

    render() {

        const { navigation } = this.props;
        const imageURI = navigation.getParam('image');
        const item = navigation.getParam('item');



        return (
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{
                        height: 325,
                        width: 325,
                        marginBottom: 30
                    }}
                    onLoad={this._onLoad}
                    source={{ uri: imageURI }}

                />

                <Button
                    onPress={() => this.saveToFavourite(item)}
                    type="clear"
                    icon={
                        <FontAwesome
                            name="heart"
                            size={55}
                            color={this.state.favColor ? "red" : "purple"}
                        />
                    }
                />
            </View>
        )
    }
}


export default ImageScreen;

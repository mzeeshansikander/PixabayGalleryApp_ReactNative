import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export class ImageScreen extends Component {

    constructor() {
        super()
        this.state = {
            imageURI: '',
            loaded: false
        }
    }

    static navigationOptions = {
        headerTitle: 'Images Browser'
    }

    render() {
        const { navigation } = this.props;
        const imageURI = navigation.getParam('image');
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
            </View>
        )
    }
}


export default ImageScreen;

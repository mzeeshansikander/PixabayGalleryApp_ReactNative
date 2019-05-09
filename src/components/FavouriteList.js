import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native'


export default class FavouriteList extends Component {


    constructor(props) {
        super(props)
        this.state = {
            fav: []
        }
        this._keyExtractor = this._keyExtractor.bind(this)
        this.renderGridPic = this.renderGridPic.bind(this)
        this.renderGridView = this.renderGridView.bind(this)
        this.renderListPic = this.renderListPic.bind(this)
        this.renderListView = this.renderListView.bind(this)


    }

    goToImageScreen(imageURI) {
        this.props.navigation.navigate('FavouriteImage', { image: imageURI })
    }


    _keyExtractor(item) {
        return item.id
    }


    renderGridPic({ item }) {
        return (

            <TouchableOpacity
                onPress={() => this.goToImageScreen(item.largeImageURL)}
                style={{ margin: 10 }}
            >
                <Image style={styles.imageThumbnail} source={{ uri: item.previewURL }} />
            </TouchableOpacity>

        )
    }

    renderGridView() {
        return (
            <FlatList
                data={this.props.picsList}
                renderItem={this.renderGridPic}
                numColumns={3}
            />
        )
    }

    renderListPic({ item }) {

        var tag = item.tags.split(',');
        // alert(tag);

        return (
            <TouchableOpacity
                onPress={() => this.goToImageScreen(item.largeImageURL)}
                style={{ margin: 10 }}

            >
                <View style={styles.listContainer}>
                    <Image source={{ uri: item.previewURL }} style={styles.listPhoto} />

                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}> {tag[0]}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.listText}>Views: {item.views}</Text>
                            <Text style={styles.listText}>Likes: {item.likes}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    renderListView() {
        return (

            <FlatList
                data={this.props.picsList}
                renderItem={this.renderListPic}
                key={this._keyExtractor}
            />

        )
    }

    render() {
        return (


            <View style={{ margin: 10, marginBottom: "10%" }}>
                {this.props.view === 'Grid' ? this.renderGridView() : this.renderListView()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageThumbnail: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: 90,
        padding: 5,
    },
    listContainer: {
        margin: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    listPhoto: {
        height: 90,
        width: 90,
    },
    listTextContainer: {
        flexDirection: 'column',
    },
    listTitle: {
        padding: 10,
        fontSize: 20,
        color: '#000',
    },
    listText: {
        padding: 10,
        fontSize: 12,
        color: '#455A65',
    },
});
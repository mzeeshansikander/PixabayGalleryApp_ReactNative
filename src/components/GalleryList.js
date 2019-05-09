import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'


export default class PicsL extends Component {

    constructor(props) {
        super(props)
        this._keyExtractor = this._keyExtractor.bind(this)
        this.renderGridPic = this.renderGridPic.bind(this)
        this.renderGridView = this.renderGridView.bind(this)
        this.renderListPic = this.renderListPic.bind(this)
        this.renderListView = this.renderListView.bind(this)
    }

    _keyExtractor(item) {
        return item.id
    }
    goToImageScreen(imageURI, item) {
        this.props.navigation.navigate('Image', { image: imageURI, item: item })
    }

    renderGridPic({ item }) {
        return (
            <TouchableOpacity
                onPress={() => this.goToImageScreen(item.largeImageURL, item)}
                style={{ flex: 1, margin: 3, padding: 3 }}
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
        return (
            <TouchableOpacity
                onPress={() => this.goToImageScreen(item.largeImageURL, item)}
                style={{ flex: 1, margin: 3, padding: 3 }}
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
            <View style={{ margin: 10 }}>
                {/* {alert(JSON.stringify(this.props.picsList[0]))} */}
                {this.props.view === 'Grid' ? this.renderGridView() : this.renderListView()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageThumbnail: {
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
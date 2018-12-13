import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapLoad from './MapLoad';
import MapSearch from './MapSearch';

export default class MapStructure extends Component {
    constructor(props){
        super(props)
        this.state = {
            loadListView: '',
        };
        this.loadList = this.loadList.bind(this);
    }

    loadList(value){
        this.setState({loadListView: value});
    }

    render() {
        return (
            <View style={styles.mapScreenContainer}>
                <View style={styles.searchContainer}><MapSearch loadList={this.loadList} loadListView={this.state.loadListView} /></View>
                <View style={styles.mapContainer}><MapLoad loadList={this.loadList} loadListView={this.state.loadListView} /></View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mapScreenContainer: {
        flex: 1,
    },
    searchContainer: {
        height: 60,
    },
    mapContainer: {
        flex: 1,
    },
});
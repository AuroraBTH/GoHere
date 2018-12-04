import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import MapLoad from './MapLoad';
import MapSearch from './MapSearch';

export default class MapStructure extends Component {

    render() {
        return (
            <View style={styles.mapScreenContainer}>
                <View style={styles.searchContainer}><MapSearch /></View>
                <View style={styles.mapContainer}><MapLoad /></View>
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
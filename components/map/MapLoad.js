import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

export default class MapLoad extends Component {
    render() {
        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
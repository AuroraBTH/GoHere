import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

export default class MapSearch extends Component {

    render() {
        return (
            <View style={styles.searchContainer}>
                <View>
                    <Text>Search for stuff, or stuff?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'blue',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
})
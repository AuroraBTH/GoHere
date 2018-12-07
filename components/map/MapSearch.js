import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../../constants/Colors';

export default class MapSearch extends Component {

    render() {
        return (
            <View style={styles.searchContainer}>
                <View>
                    <SearchBar
                        // onChangeText={}
                        // onClear={}
                        clearIcon={{ color: 'red' }}
                        round
                        showLoading
                        darkTheme
                        placeholder='Search'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: Colors.stone,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
})
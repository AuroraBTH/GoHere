import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Colors from '../constants/Colors';

import MapStructure from '../components/map/MapStructure';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'GoHere',
        headerTintColor: Colors.tintColor,
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: Colors.stone,
        },
        headerTitleStyle: {
            fontSize: 22,
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <MapStructure />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

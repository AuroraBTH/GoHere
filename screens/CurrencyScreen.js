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
import CurrencyStructure from '../components/currency/CurrencyStructure';
import Colors from '../constants/Colors';

export default class CurrencyScreen extends React.Component {
    static navigationOptions = {
    title: 'GoHere',
    headerTintColor: Colors.tintColor,
    headerStyle: {
        backgroundColor: Colors.stone,
    },
    headerTitleStyle: {
        fontSize: 22,
    },
  };

    render() {
        return (
            <View style={styles.container}>
                <CurrencyStructure />
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

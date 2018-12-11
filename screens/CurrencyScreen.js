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

export default class CurrencyScreen extends React.Component {
    static navigationOptions = {
    title: 'Currency',
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

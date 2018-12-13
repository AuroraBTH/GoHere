import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Colors from '../constants/Colors';

import SettingsStructure from '../components/settings/SettingsStructure';

export default class SettingsScreen extends React.Component {
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
              <SettingsStructure />
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

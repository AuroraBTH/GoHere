import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebBrowser } from 'expo'
import Colors from '../constants/Colors'

import RoutesStructure from '../components/routes/RoutesStructure'
export default class RoutesScreen extends React.Component {
    static navigationOptions = {
        title: 'GoHere',
        headerTintColor: Colors.tintColor,
        headerStyle: {
            backgroundColor: Colors.stone,
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            fontSize: 22,
        },
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View>
                        <RoutesStructure />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

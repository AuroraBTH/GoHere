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

export default class RoutesScreen extends React.Component {
    static navigationOptions = {
    title: 'Routes',
  };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.settingsContainer}>
                        <Text>Routes</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    settingsContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
});
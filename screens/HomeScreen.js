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

export default class HomeScreen extends React.Component {
    static navigationOptions = {
    header: null,
  };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.homeContainer}>
                        <Text style={styles.goHereTitle}>GoHere</Text>
                        <Text>Travel app</Text>
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
    homeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    goHereTitle: {
        fontSize: 40,
        color: '#406983',
    },
});

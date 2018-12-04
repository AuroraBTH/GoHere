import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Navbar from './navigation/Navbar';

const AppContainer = createAppContainer(Navbar);

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <AppContainer style={styles.navContainer} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navContainer: {
        height: 200,
    },
});

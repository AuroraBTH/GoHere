import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Navbar from './navigation/Navbar';

import store from './redux/store';
import { Provider } from 'react-redux';

const AppContainer = createAppContainer(Navbar);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <AppContainer />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

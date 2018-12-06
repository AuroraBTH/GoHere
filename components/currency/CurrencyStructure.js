import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native';

export default class CurrencyStructure extends Component {

    render() {
        return (
            <View style={styles.currencyScreenContainer}>
                <ScrollView style={styles.currencyContainer}>
                    <View>
                        <Text>
                            Hej
                        </Text>
                        <Text>
                            
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    currencyScreenContainer: {
        flex: 1,
    },
    currencyContainer: {
        flex: 1,
    },
});

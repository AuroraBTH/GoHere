import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, Platform, TouchableHighlight } from 'react-native'
import Colors from '../../constants/Colors'
import { Icon } from 'expo';

export default class RoutesStructure extends Component {
    constructor(props){
        super(props);
        this.state = {
            routes: [
                {key: "Karlskrona"},
                {key: "Stockholm"},
                {key: "Berlin"},
            ]
        }
    }

    render() {
        return (
            <View style={ styles.routesScreenContainer }>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Routes</Text>
                </View>
                <FlatList
                    scrollEnabled={true}
                    data={this.state.routes}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={null}
                            underlayColor={null}
                        >
                            <View style={styles.listView}>
                                <Text style={styles.listItem}>{item.key}</Text>
                                <Icon.Ionicons
                                    name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                                    size={20}
                                    style={[styles.listItem, { marginLeft: 'auto' }]}
                                />
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    routesScreenContainer: {
        flex: 1,
        margin: 10,
    },
    listView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colors.borderGrey,
        borderBottomWidth: 1,
    },
    listItem: {
        color: Colors.stone,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
})
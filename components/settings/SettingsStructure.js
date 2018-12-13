import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Platform, Alert, TouchableHighlight, Switch } from 'react-native';
import Colors from '../../constants/Colors';
import { Icon } from 'expo';

const items = [
    {key: 'FAQ'},
    {key: 'Profile settings'},
    {key: 'Map settings'},
    {key: 'Notification settings'},
    {key: 'Location settings'},
];

export default class SettingsStructure extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: false
        };
    }

    showAlert() {
        Alert.alert(
            'Nothing to change yet...'
        )
    }

    render() {
        return (
            <View style={styles.settingsScreenContainer}>
                <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
                    <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 10}}>Settings</Text>
                </View>
                <FlatList
                    scrollEnabled={false}
                    data={items}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            onPress = {this.showAlert}
                            underlayColor={Colors.highlightGrey}
                        >
                        <View style={styles.listView}>
                            <Text style={styles.listItem}>{item.key}</Text>
                            <Icon.Ionicons
                                name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                                size={20}
                                style={[styles.listItem, {marginLeft: 'auto'}]}
                            />
                        </View>
                        </TouchableHighlight>
                    )}
                />
                <View style={[styles.listView, {flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0}]}>
                    <Text style={styles.listItem}>Offline mode</Text>
                    <Switch
                        value={this.state.value}
                        onValueChange={(value) => this.setState({value})}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    settingsScreenContainer: {
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
});

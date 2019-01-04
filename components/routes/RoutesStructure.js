import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, Platform, TouchableHighlight, AsyncStorage, Alert } from 'react-native'
import Colors from '../../constants/Colors'
import { Icon } from 'expo';
import IconFontA from 'react-native-vector-icons/FontAwesome';

export default class RoutesStructure extends Component {
    constructor(props){
        super(props);
        this.state = {
            theRoute: ""
        }
    }

    componentDidMount() {
        this.loadTheRoute()
    }

    async loadTheRoute() {
        this.setState({
            theRoute: JSON.parse(await AsyncStorage.getItem('route'))
        })
    }

    async deleteMarker(idOfMarker) {
        tempRoute = this.state.theRoute

        tempRoute.splice(idOfMarker, 1)

        await AsyncStorage.setItem('route', JSON.stringify(this.state.theRoute))

        this.loadTheRoute()
    }

    removeMarker(nameOfMarker, idOfMarker) {
        Alert.alert(
            'Remove this marker',
            nameOfMarker.toString(),
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'Remove', onPress: () => this.deleteMarker(idOfMarker)},
            ],
        )
    }

    render() {
        return (
            <View style={ styles.routesScreenContainer }>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Routes (Karlskrona)</Text>
                </View>
                <FlatList
                    scrollEnabled={true}
                    data={this.state.theRoute}
                    renderItem={({ item, index }) => (
                        <TouchableHighlight
                            onPress={() => this.removeMarker(item.key, index)}
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

                <IconFontA.Button
                    style={{justifyContent: "center"}}
                    name="refresh"
                    backgroundColor="#3b5998"
                    size={40}
                    iconStyle={{padding: 5}}
                    onPress={async () => {
                        this.loadTheRoute()
                    }}
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

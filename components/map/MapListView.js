import React, { Component } from 'react'
import { Dimensions, Platform, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TabBarIcon from '../TabBarIcon'
import Colors from '../../constants/Colors'

let width = Dimensions.get('window').width;

class MapListView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    magicClickFunction(marker){
        returnMarker = {
            coordinate: {
                latitude: marker.location.location.lat,
                longitude: marker.location.location.lng
            },
            title: marker.name,
            descripiton: marker.address,
        }

        latDelta = marker.location.viewport.northeast.lat - marker.location.viewport.southwest.lat,
        lngDelta = marker.location.viewport.northeast.lng - marker.location.viewport.southwest.lng

        returnRegion = {
            latitude: marker.location.location.lat,
            longitude: marker.location.location.lng,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta
        }
        
        this.props.loadStartRegionAndMarkers(returnRegion, returnMarker)
    }

    mappedArray(){
        return this.props.resultArray.map((obj, index) => {
            return (
                <TouchableOpacity key={index} style={styles.itemWrapper} onPress={() => this.magicClickFunction(obj)}>
                    <View style={styles.left}>
                        <Text style={styles.itemTextTitle}>{obj.name}</Text>
                        <Text style={styles.itemText}>{obj.address}</Text>
                    </View>
                    <View styles={styles.right}>
                        <TabBarIcon
                            name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <ScrollView style={styles.mapListViewContainer}>
                { this.props.resultArray.length > 0 ? (
                    <ScrollView style={styles.scrollViewWrapper}>{this.mappedArray()}</ScrollView>
                ) : (
                    <View>
                        <Text>If you have trouble finding your location, try to be more specific:</Text>
                        <Text>Ex: Landbron Karlskrona</Text>
                    </View>
                )}
            </ScrollView>
        )
    }
}

export default connect((store) => {
    return {
        resultArray: store.map.resultArray,
        test: store.map.test,
    }
})(MapListView)

const styles = StyleSheet.create({
    mapListViewContainer: {
        
    },
    scrollViewWrapper: {
        width: width,
    },
    itemWrapper: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 5,
        borderBottomColor: Colors.stone,
        borderBottomWidth: 2,
    },
    left: {
        flex: 0.9,
        flexWrap: 'wrap',
        marginBottom: 5,
    },
    right: {
        flex: 0.1,
    },
    icon: {
    },
    itemText: {
        color: Colors.almostBlack,
        fontSize: 18
    },
    itemTextTitle: {
        color: Colors.almostBlack,
        fontSize: 22
    }
})
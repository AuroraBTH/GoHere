import React, { Component } from 'react'
import { Dimensions, Platform, StyleSheet, ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import TabBarIcon from '../TabBarIcon'
import Colors from '../../constants/Colors'

let width = Dimensions.get('window').width;

class MapListView extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.mappedArray = this.mappedArray.bind(this)
    }

    mappedArray(){
        return this.props.resultArray.map((obj, index) => {
            return (
                <View key={index} style={styles.itemWrapper}>
                    <View style={styles.left}>
                        <Text style={styles.itemTextTitle}>{obj.name}</Text>
                        <Text style={styles.itemText}>{obj.address}</Text>
                    </View>
                    <View styles={styles.right}>
                        <TabBarIcon
                            name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                        />
                    </View>
                </View>
            )
        })
    }

    render() {
        return (
            <ScrollView style={styles.mapListViewContainer}>
                { this.props.resultArray.length > 0 ? (
                    <ScrollView style={styles.scrollViewWrapper}>{this.mappedArray()}</ScrollView>
                ) : (
                    <View><Text>No search</Text></View>
                )}
                {console.log(this.props.test)}
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
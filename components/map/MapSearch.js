import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Search from 'react-native-search-box'
import { connect } from 'react-redux'

import { submitSearch } from '../../redux/actions/mapAction'
import Colors from '../../constants/Colors'
class MapSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: "",
        }
    }

    render() {
        return (
            <View style={styles.searchContainer}>
                <View>
                    <Search
                        ref="search_box"
                        onChangeText={(searchValue) => this.setState({ searchValue })}
                        onSearch={ () => this.props.dispatch(submitSearch(this.state.searchValue)) }
                    /> 
                </View>
                <ScrollView>{console.log(this.state.resultArray)}</ScrollView>
            </View>
        )
    }
}

export default connect((store) => {
    return {
        resultArray: store.map.resultArray
    }
})(MapSearch)

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: Colors.stone,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
})
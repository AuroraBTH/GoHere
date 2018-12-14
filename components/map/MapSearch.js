import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Search from 'react-native-search-box'
import { connect } from 'react-redux'

import { submitSearch } from '../../redux/actions/mapAction'
import Colors from '../../constants/Colors'
class MapSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(load) {
        this.props.loadList(load)
    }

    render() {
        return (
            <View style={styles.searchContainer}>
                <View>
                    <Search
                        ref="search_box"
                        onChangeText={(searchValue) => this.setState({ searchValue })}
                        onSearch={() => this.props.dispatch(submitSearch(this.state.searchValue))}
                        onFocus={() => this.handleChange('load')}
                        onCancel={() => this.handleChange('cancel')}
                        inputBorderRadius={25}
                        backgroundColor={Colors.stone}
                        inputHeight={30}
                        defaultValue={'landbron karlskron'}
                    />
                </View>
            </View>
        )
    }
}

export default connect((store) => {
    return {}
})(MapSearch)

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: Colors.stone,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
})
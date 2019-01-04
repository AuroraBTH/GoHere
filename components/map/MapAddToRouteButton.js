import React, { Component } from 'react'
import { View, StyleSheet, Button, TouchableHighlight, Platform } from 'react-native'
import Colors from '../../constants/Colors'
import { connect } from 'react-redux'
import { addPinToRoute } from '../../redux/actions/storageAction' 

class MapAddToRouteButton extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        
    }

    magicClick() {
        this.props.handler()
        this.props.dispatch(addPinToRoute(this.props.coords, this.props.title))
    }

    render() {
        return (
            <TouchableHighlight style={Platform.OS === 'ios' ? styles.buttonWrapper : styles.buttonWrapperAndroid}>
                <Button
                    title={'Add to route'}
                    color={Platform.OS === 'ios' ? Colors.white : Colors.accent}
                    onPress={() => this.magicClick()}
                />
            </TouchableHighlight>
        );
    }
}

export default connect((store) => {
    return {}
})(MapAddToRouteButton)


const styles = StyleSheet.create({
    buttonWrapper: {
        width: '50%',
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: Colors.accent,
        marginBottom: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.darkerAccent,
    },
    buttonWrapperAndroid: {
        width: '50%',
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 10
    }
});

import React, { Component } from 'react'
import { View, StyleSheet, Button, TouchableHighlight } from 'react-native'
import Colors from '../../constants/Colors'
import { connect } from 'react-redux'
import { addPinToRoute } from '../../redux/actions/storageAction' 

class MapAddToRouteButton extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        
    }

    render() {
        return (
            <TouchableHighlight style={styles.buttonWrapper}>
                <Button
                    title={'Add to route'}
                    color={Colors.white}
                    onPress={() => this.props.dispatch(addPinToRoute(this.props.coords, this.props.title))}
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
    button: {
        color: Colors.white,
    }
});
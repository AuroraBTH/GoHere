import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';

import { connect } from 'react-redux'
import MapListView from './MapListView'
import MapAddToRouteButton from './MapAddToRouteButton'

class MapLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
            ],
            searchMarker: null,
            addPinToRoute: false,
        }

        this.handler = this.handler.bind(this)
        this.loadStartRegionAndMarkers = this.loadStartRegionAndMarkers.bind(this)
        this.onRegionChange = this.onRegionChange.bind(this)
    }

    componentWillMount() {
        if (Platform.OS === "android" && Constants.isDevice) {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status == "granted") {
            let location = await Location.getCurrentPositionAsync({});
            this.setState({
                startRegion: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                },
            });
        }
    };

    loadStartRegionAndMarkers(region, markers) {
        this.setState({
            startRegion: region,
            searchMarker: [markers]
        })

        this.props.loadList('')

    }
    
    onRegionChange(region) {
        this.setState({ startRegion: region })
    }

    renderListView(props){
        return <MapListView loadStartRegionAndMarkers={this.loadStartRegionAndMarkers} loadListView={this.state.loadListView}/>
    }

    handler() {
        // magicList should be the currently loaded route (fetch from redux?)
        magicList = [
            {
                "coordinate": {
                    "latitude": 56.1651995,
                    "longitude": 15.5860701,
                },
                "descripiton": "Landbron, 371 33 Karlskrona, Sweden",
                "title": "Landbron",
            },
            {
                "coordinate": {
                    "latitude": 56.1736612,
                    "longitude": 15.5881602,
                },
                "title": "Willys"
            },
            {
                "coordinate": {
                    "latitude": 56.19696099999999,
                    "longitude": 15.64951,
                },
                "title": "Willys Karlskrona Castle Hill"
            }
        ]

        this.setState({
            searchMarker: null,
            addPinToRoute: false,
            markers: magicList
        })
    }

    renderMapView(props){
        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    region={this.state.startRegion}
                >
                    {
                        this.state.searchMarker && (
                            this.state.searchMarker.map((marker, index) => (
                                <Marker
                                    coordinate = { marker.coordinate }
                                    title = { marker.title }
                                    description = { marker.description }
                                    key = { index }
                                />
                            ))
                        )
                    }
                    
                    {this.state.markers.map((marker, index) => (
                        <Marker
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.description}
                            key={index}
                        />
                    ))}

                </MapView>
                {this.state.searchMarker && (
                    <MapAddToRouteButton 
                        title={this.state.searchMarker[0].title} 
                        coords={this.state.searchMarker[0].coordinate}
                        handler={this.handler}
                    />    
                )}
            </View>
        );
    }

    render() {
        return (
            <View key={this.state.addPinToRoute} style={styles.mapContainer}>
                {this.props.loadListView == 'load' ? (
                    this.renderListView()
                ) : (
                    this.renderMapView()
                )}
            </View>
        )
    }
}

export default connect((store) => {
    return {}
})(MapLoad);

const styles = StyleSheet.create({
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
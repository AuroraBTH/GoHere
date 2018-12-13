import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { connect } from 'react-redux';
import MapListView from './MapListView';

class MapLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startRegion: {
                latitude: 56.1779866,
                longitude: 15.5925124,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            markers: [
            ],
            searchMarker: null
        }
        this.loadStartRegionAndMarkers = this.loadStartRegionAndMarkers.bind(this)
        this.onRegionChange = this.onRegionChange.bind(this)
    }

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
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                            key={index}
                        />
                    ))}
                </MapView>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.mapContainer}>
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
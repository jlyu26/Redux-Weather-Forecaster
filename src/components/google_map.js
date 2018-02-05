import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {	// create and embedded Google map inside of component
			zoom: 10,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// this.refs.map
		return <div ref="map" />; 
	}
}

export default GoogleMap;
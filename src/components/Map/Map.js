import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "@salesforce/canvas-js-sdk";
import mapStyle from "../../assets/map_styles/style1";
import { Theme } from "../../assets/Theme";

/*
props:
	location, the active selected country
*/

export default function Map(props) {
	const [location, setLocation] = useState({});

	const consumerSecret = process.env.CANVAS_CONSUMER_SECRET;

	// global.Sfdx.canvas(() => {});

	const options = {
		styles: mapStyle,
		disableDefaultUI: true,
		backgroundColor: Theme.secondary,
	};

	const mapContainerStyle = {
		width: "100vw",
		height: "100vh",
	};

	const center = {
		lat: location.lat,
		lng: location.lng,
	};

	useEffect(() => {
		if (!props.location.OBJECTID) return;
		let newLocation = {
			lat: props.location.Lat,
			lng: props.location.Long_,
			zoom: 5,
		};
		setLocation(newLocation);
	}, [props.location]);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
	});

	if (loadError) return "Error loading google maps";
	if (!isLoaded) return "Loading...";

	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={location.zoom}
				center={center}
				options={options}
			></GoogleMap>
		</div>
	);
}

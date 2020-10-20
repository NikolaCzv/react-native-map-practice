import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const DEFAULT_REGION = {
    latitude: 42.00250679125294,
    longitude: -87.67067112028599,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

const Map = () => {

    const [region, setRegion] = useState(DEFAULT_REGION);

	const onRegionChange = (region) => {
		setRegion(region);
    };

    console.log("latitude", region.latitude)
    console.log("longitude", region.longitude)

		return (
			<SafeAreaView style={styles.container}>
				<MapView
					initialRegion={region}
					style={styles.mapStyle}
					provider={MapView.PROVIDER_GOOGLE}
					region={region}
					onRegionChangeComplete={(region) => onRegionChange(region)}
				/>
			</SafeAreaView>
		)
}

export default Map;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
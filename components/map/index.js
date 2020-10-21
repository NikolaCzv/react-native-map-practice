import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Dimensions, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import fireLogo from "../../assets/fire-logo.png"; 

const DEFAULT_REGION = {
    latitude: 41.7645358,
    longitude: -87.8050120,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

const DEFAULT_MARKERS = [
	{
		latlng: {
			latitude: 41.7645358, 
			longitude: -87.8050120
		},
		title: "Chicago Fire Soccer Club",
		description: "Chicago Fire Football Club are an American professional soccer franchise based in Chicago, Illinois. The team competes in Major League Soccer (MLS) as a member of the league's Eastern Conference, having moved to the conference in 2002.",
		logo: fireLogo
	}
];

const Map = () => {

	const [region, setRegion] = useState(DEFAULT_REGION);
	const [markers, setMarkers] = useState(DEFAULT_MARKERS);
	const [screenHeight, setScreenHeight] = useState(0);

	const onRegionChange = (region) => {
		setRegion(region);
	};

	const handleonContentSizeChange = (contentWidth, contentHeight) => {
		setScreenHeight(contentWidth);
	};

		return (
			<SafeAreaView style={styles.container}>
				<MapView
					initialRegion={region}
					style={styles.mapStyle}
					provider={MapView.PROVIDER_GOOGLE}
					region={region}
					onRegionChangeComplete={(region) => onRegionChange(region)}
				>
					{markers.map((marker, index) => (
						<Marker 
							key={index}
							coordinate={marker.latlng}
						>
							<Callout style={styles.boxStyle}>
								<ScrollView 
									style={styles.scroll}
									scrollEnabled={true}
									onContentSizeChange={handleonContentSizeChange}
									>
									<Text style={styles.titleStyle}>{marker.title}</Text>
									<Image source={marker.logo} style={styles.logoStyle}/>
										<Text>{marker.description}</Text>
								</ScrollView>
							</Callout>
						</Marker>
					))}
				</MapView>
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
	boxStyle: {
		height: 200,
		width: 200,
		marginHorizontal: 20,
		padding: 10
	},
	titleStyle: {
		fontWeight: 'bold',
		color: '#377DFC'
	},
	logoStyle: {
		width: '90%',
		height: 100,
		margin: 10
	},
	scroll: {
		width: '100%'
	}
});
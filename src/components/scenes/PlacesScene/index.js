import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Components } from 'exponent';


export default class PlacesScene extends React.Component {
  render() {
    return (
		<Components.MapView
			style={{flex: 1}}
			initialRegion={{
			latitude: 47.4811282,
			longitude: 18.990221,
			latitudeDelta: 40.0922,
			longitudeDelta: 40.0421,
			}}
		>
			<Components.MapView.Marker
				coordinate={{latitude: 38.9637,longitude: 35.2433}}
				title={'Ankara'}
				description={'Capital Of Turkey'}
			/>
			<Components.MapView.Marker
				coordinate={{latitude: 47.3668936,longitude: 9.7004806}}
				title={'Dornbirn'}
				description={'Erasmus!'}
			/>
			<Components.MapView.Marker
				coordinate={{latitude: 41.0049822,longitude: 28.7319998}}
				title={'Istanbul'}
				description={'Biggest city in Turkey'}
			/>
			<Components.MapView.Marker
				coordinate={{latitude: 53.5584902,longitude: 9.7877403}}
				title={'Ankara'}
				description={'Currently living here'}
			/>
		</Components.MapView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#327389',
  },
});

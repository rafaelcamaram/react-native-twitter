import React, { Component } from 'react';
import { AppRegistry, Platform, StatusBar, ActivityIndicator } from 'react-native';

/* Dependencies */
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

/* Routes */
import HomeScreen from 'app/routes/Home/index';
import AboutScreen from 'app/routes/Messages/index';

const routes = {
	Home: { screen: HomeScreen },
	About: { screen: AboutScreen }
};

const AppNavigator = StackNavigator({ ...routes }, { initialRouteName: 'Home' });

export default class reactStarterKit extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <AppNavigator style={{ marginTop: Platform.OS === 'ios' ? 0 : 100 }} />
		);
	}
}

AppRegistry.registerComponent('reactStarterKit', () => reactStarterKit);
Expo.registerRootComponent(reactStarterKit);
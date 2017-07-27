import React, {Component} from 'react';
import {AppRegistry, Platform, StatusBar, ActivityIndicator, Text, View, Image} from 'react-native';

/* Dependencies */
import Expo from 'expo';
import {StackNavigator, TabNavigator} from 'react-navigation';

/* Routes */
import routes from 'app/config/routes';

/* Components */
import ActionBar from 'app/components/ActionBar/index';

/* Images */
import images from 'app/config/images';

/* Styles */
import styles from 'app/config/styles';

const AppNavigator = TabNavigator({...routes}, {
	tabBarOptions: {
		style: {
			backgroundColor: 'white',
			borderBottomWidth: 1,
			borderBottomColor: '#D4DADE'
		},
		activeTintColor: '#1da1f2',
		inactiveTintColor: '#657786',
		showLabel: false,
		showIcon: true,
		labelStyle: {
			fontSize: 12,
		},
		indicatorStyle: {
			backgroundColor: "#1da1f2",
		}
	},
	tabBarPosition: 'top'
});

class reactStarterKit extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<ActionBar type="search"/>
				<AppNavigator/>
			</View>
		);
	}
}

Expo.registerRootComponent(reactStarterKit);
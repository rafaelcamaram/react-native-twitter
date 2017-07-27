import React, { Component } from 'react';
import {
	View,
	Button,
	StatusBar,
	Image
} from 'react-native';

/* Components */
import Counter from 'app/components/Counter/index';

/* Styles */
import styles from './styles';

/* Images */
import images from 'app/config/images';

class SearchPage extends Component {
	static navigationOptions = {
		tabBarLabel: 'Search',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={images.searchIcon}
				style={{width:24, height: 24, tintColor: tintColor}}
			/>
		),
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>

				<Counter text="Search"/>
				<Button
					title="Go to Jane's profile"
					onPress={() => {
							navigate('Messages', { name: 'Search props' })
					}}
				/>
			</View>)
	}
}

export default SearchPage;
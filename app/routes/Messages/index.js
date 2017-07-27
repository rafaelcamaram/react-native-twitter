import React, { Component } from 'react';
import {
	View,
	Button,
	Image
} from 'react-native';

/* Components */
import Counter from 'app/components/Counter/index';

/* Styles */
import styles from './styles';

/* Images */
import images from 'app/config/images';

class MessagesPage extends Component {
	static navigationOptions = {
		tabBarLabel: 'Messages',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={images.messagesIcons}
				style={{width:24, height: 24, tintColor: tintColor}}
			/>
		),
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Counter text="Messages"/>
				<Button
					title="Go to Jane's profile"
					onPress={() => {
						navigate('DrawerOpen', { name: 'Home props' })
					}}
				/>
			</View>)
	}
}

export default MessagesPage;
import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';
import { DrawerItems } from 'react-navigation';

/* Styles */
import styles from './styles';

/* Images */
import images from 'app/config/images';

class DrawerContent extends Component {
	render() {
		let props = this.props
		return (
			<View style={styles.container}>
				<Image
					style={styles.profileImage}
					source={images.profileImage}
				/>
				<DrawerItems {...props} />
			</View>
		)
	}
}

export default DrawerContent;
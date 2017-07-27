import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

/* Images */
import images from 'app/config/images';

/* Styles */
import styles from './styles';

/* Components */
import SearchInput from './objects/SearchInput/index';

class ActionBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'home',
			textTitle: 'Twitter Feed'
		}
	}

	componentWillMount() {
		const type = this.props.type;
		let textTitle = '';

		switch (type) {
			case "notifications": {
				textTitle = 'Notifications';
				break;
			}
			case "search":
				textTitle = 'Search';
				break;
			case "messages":
				textTitle = 'Messages';
				break;
			default:
				textTitle = 'Twitter Feed';
				break;
		}

		this.setState({
			type: type,
			textTitle: textTitle
		});
	}

	render() {
		const { textTitle, type } = this.state;
		return (
			<View
				style={styles.actionBar}>
				<Image
					style={styles.profileImage}
					source={images.profileImage}
				/>
				{type === 'search' ? <SearchInput/> : <Text style={styles.titleText}>{textTitle}</Text>}
			</View>
		);
	}
}

export default ActionBar;

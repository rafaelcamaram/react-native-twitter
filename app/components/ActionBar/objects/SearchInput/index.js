import React, { Component } from 'react';
import {View, TextInput} from 'react-native';

/* Styles */
import styles from './styles';

class SearchInput extends Component {

	render() {
		return (
			<View style={styles.searchInput}>
				<TextInput
					multiline={false}
					underlineColorAndroid="#f5f8fa"
					placeholder="Search on Twitter"
					placeholderTextColor='#9ca4aa'
					style={styles.textInput}/>
			</View>
		);
	}
}

export default SearchInput;

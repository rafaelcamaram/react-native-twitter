import React, { Component } from 'react';
import {
	Text
} from 'react-native';

/* Styles */
import styles from './styles';

class Counter extends Component {
	render() {
		return (<Text style={styles.text}>Counter Component!! {this.props.text}</Text>)
	}
}

export default Counter;
import {
	StyleSheet,
	StatusBar,
	Platform
} from 'react-native';

const styles = StyleSheet.create({
	actionBar: {
		height: 56,
		paddingLeft: 16,
		paddingRight: 16,
		flexDirection: 'row',
		marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
		alignItems: 'center'
	}
});

export default styles;
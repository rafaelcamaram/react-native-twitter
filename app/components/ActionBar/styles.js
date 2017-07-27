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
		alignItems: 'center',
		backgroundColor: 'white',
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 40
	},
	titleText: {
		marginLeft: 16,
		fontWeight: 'bold',
		fontSize: 18
	}
});

export default styles;
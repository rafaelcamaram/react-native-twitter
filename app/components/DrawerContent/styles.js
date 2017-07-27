import {
	StyleSheet,
	StatusBar,
	Platform
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 16 : StatusBar.currentHeight + 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 40
	},
});

export default styles;
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: "stretch",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: "stretch",
  },
  profileImageContainer: {
    width: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  content: {
    flex: 1,
    paddingLeft: 8
  },
  authorContent: {
    flexDirection: 'row'
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 15
  },
  tweetDetails: {
    marginLeft: 4,
    color: '#C1C1C1'
  },
  tweetContent: {
    flexDirection: 'row'
  },
  splitLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e6ecf0',
    marginTop: 16
  }
});

export default styles;
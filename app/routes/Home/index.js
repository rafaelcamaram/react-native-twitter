import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Button,
  StatusBar,
  Image,
  Text
} from 'react-native';

/* Components */
import Tweet from 'app/components/Tweet/index';

/* Styles */
import styles from './styles';

/* Images */
import images from 'app/config/images';

class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={images.homeIcon}
        style={{width: 24, height: 24, tintColor: tintColor}}
      />
    ),
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView horizontal={false} endFillColor="blue"
                  style={styles.container}>
        {[...Array(10)].map((x, i) =>
          <Tweet key={i}/>
        )}
      </ScrollView>
    )
  }
}

export default HomePage;
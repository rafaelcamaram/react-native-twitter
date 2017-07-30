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
import Counter from 'app/components/Counter/index';

/* Styles */
import styles from './styles';

/* Images */
import images from 'app/config/images';

class Tweet extends Component {
  render() {
    return (
      <View style={{
        flex: 1, flexDirection: 'column', padding: 8, paddingLeft: 16, paddingRight: 16, alignSelf: "stretch",
      }}>
        <View style={{flex: 1, flexDirection: 'row', alignSelf: "stretch",}}>
          <View style={{
            width: 40,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            marginRight: 8,
          }}>
            <Image
              source={images.profileImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40
              }}
            />
          </View>
          <View style={{flex: 1, paddingLeft: 8}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>Rafael Câmarass</Text>
              <Text style={{marginLeft: 4, color: '#C1C1C1'}}>@rafaelcamaram</Text>
              <Text style={{marginLeft: 4, color: '#C1C1C1'}}>- 6d</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Interested in #Firebase for your chat app? @DeKoServidoni shows how to implement it:
                bit.ly/2rc8p8l
                #ACSnippets</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#e6ecf0', marginTop: 16}}/>
      </View>
    )
  }
}

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
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignSelf: 'stretch',
                    backgroundColor: 'white',
                  }}>
        {[...Array(10)].map((x, i) =>
          <Tweet/>
        )}
      </ScrollView>
    )
  }
}

export default HomePage;
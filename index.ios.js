import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

/* NPM Import */
import Expo from 'expo';

/* App */
import App from 'app/index';

export default class reactStarterKit extends Component {
  render() {
    return (<App/>);
  }
}

Expo.registerRootComponent(App);
AppRegistry.registerComponent('reactStarterKit', () => reactStarterKit);

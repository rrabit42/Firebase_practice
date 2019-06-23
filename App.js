import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import firebase from 'firebase';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import { firebaseConfig } from './screens/config';

firebase.initializeApp(firebaseConfig)

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  LoginScreen : LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

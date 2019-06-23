import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createSwitchNavigator} from 'react-native'
import firebase from 'firebase';
import Expo from 'expo';

export default class LoginScreen extends Component { 
  render() {
    return (
      <View style={styles.container}>
        <Button
          title = "Sign In WIth Google"
          onpress = {() => alert('button pressed')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

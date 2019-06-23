import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createSwitchNavigator} from 'react-native'
import firebase from 'firebase';
import Expo from 'expo';

export default class LoginScreen extends Component { 
    signInWithGoogleAsync = async () => {
      try {
        const result = await Expo.Google.logInAsync({
          behavior: 'web',
          androidClientId: YOUR_CLIENT_ID_HERE,
          //iosClientId: YOUR_CLIENT_ID_HERE,
          scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title = "Sign In WIth Google"
          onpress = {() => this.signInWithGoogleAsync()}
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

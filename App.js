import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import firebase from 'firebase';
import StyleFirebaseAuth from 'firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyCMG92fTz1JOMkt-i1A-caJlAQHj5zAL3w",
  authDomain: "practice-690dd.firebaseapp.com",
  databaseURL: "https://practice-690dd.firebaseio.com",
  projectId: "practice-690dd",
  storageBucket: "",
  messagingSenderId: "634917161579",
  appId: "1:634917161579:web:93f62e0634d54500"
})


export default class App extends Component {
  state = {isSignedIn : false}
  uiConfig = {
    //폰은 'redirect'
    signInFlow : 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isSignedIn ?
        <StyleFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth = {firebase.auth()}/>
        :
        <Text>Not Signed In</Text>}
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

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import firebase from 'firebase';


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
    firebase.auth().onAuthStateChange(user => {
      this.setState({isSignedIn: !!user})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isSignedIn ?
        <Text> Signed In</Text>
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

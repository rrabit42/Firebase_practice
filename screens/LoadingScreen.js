import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import {createSwitchNavigator} from 'react-native'
import firebase from 'firebase'

export default class LoadingScreen extends Component {

  componentDidMount(){
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    //ES5 function 쓰면 .bind(this)해줘야함
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
          this.props.navigation.navigate('DashboardScreen')
      }
      else{
        this.props.navigation.navigate('LoginScreen')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
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

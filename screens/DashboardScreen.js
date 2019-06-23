import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createSwitchNavigator} from 'react-native'
import firebase from 'firebase';

export default class DashboardScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()}/>
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

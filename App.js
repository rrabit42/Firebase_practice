/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

//패키지 연결
import firebase from 'firebase';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { data: [] } //Firebase 데이터가 저장될 공간
  }
  componentDidMount(){
    //파이어베이스 연결 코드
    firebase.initializeApp({
        apiKey: "AIzaSyCMG92fTz1JOMkt-i1A-caJlAQHj5zAL3w",
        authDomain: "practice-690dd.firebaseapp.com",
        databaseURL: "https://practice-690dd.firebaseio.com",
        projectId: "practice-690dd",
        storageBucket: "",
        messagingSenderId: "634917161579",
        appId: "1:634917161579:web:93f62e0634d54500"
    });

    //저장된 데이터 읽기
    const ref = firebase.database().ref();

    ref.on("value", snapshot => {
      //Firebase 데이터 state.data로 업데이트
      this.setState({ data: snapshot.val()});
    })

  }
  render() {
    return (
      <View style={styles.container}>
        {
          //json파일은 map()을 사용하여 화면에 노출시킨다
          this.state.data.map(value =>{
            return(
              <View>
                <Image
                  style = {{width: 110, height: 110}}
                  source ={{uri : value.image}}
                />
                <Text>{value.name}</Text>
              </View>
            )
          })
        }
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

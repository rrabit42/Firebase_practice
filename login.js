import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import firebase from 'firebase';

export default class Login extends Component{

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

  //초기 필드 변수 할당
  init = () => {
    this.auth = firebase.auth();
    // this.GoogleBtn = document.getElementById('GoogleBtn');
    // this.FacebookBtn = document.getElementById('FacebookBtn');
  }

  

  //초기 이벤트 바인딩
  initEvent = () => {
    this.auth.onAuthStateChanged(this.onAuthChange.bind(this));
    // this.GoogleBtn.addEventListener('click', this.onGoogleBtnClick.bind(this));
    // this.FacebookBtn.addEventListener('click', this.onFacebookBtnClick.bind(this));
  }

  //Google 로그인 버튼 클릭
  onGoogleBtnClick = () => {
    const googleProvider = firebase.auth.GoogleAuthProvider();
    this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(this.signInWithPopup.bind(this, googleProvider))
    .catch((error) => {
      <Text>{error}</Text>
    })
  }

  //Facebook 로그인 버튼 클릭
  onFacebookBtnClick = () => {
    const facebookProvider = firebase.auth.FacebookAuthProvider();
    this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(this.signInWithPopup.bind(this, facebookProvider))
    .catch((error) => {
      <Text>{error}</Text>
    })
  }

  //sign-in 팝업창으로는 나중에 구현
  signInWithPopup = (provider) => {
    const oSignIn = (result) => {
      <Text>로그인 성공</Text>
    }

    return this.auth.signInWithPopup(provider).then(oSignIn.bind(this))
    .catch((error) => {
      <Text>{error}</Text>
    })
  }

  //인증 정보 변화
  onAuthChange = (user) => {
    if(user){
      <Text>JSON.stringify(user)</Text>
    }
    else{
      <Text>로그아웃</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Button onClick={this.onFacebookBtnClick} title="Facebook">Facebook</Button>
          <Button onClick={this.onGoogleBtnClick} title="Google">Google</Button>
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
  

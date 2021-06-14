import axios from 'axios';
import React from 'react';
import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import Searching from './Searching';

export default class extends React.Component {
  state={
    isLoading: true
  };
  getresponce = async() => {
    try {
      const { data } = await axios.get(`https://xivapi.com/servers`);
      this.setState({isLoading:false})
    }
     catch (error) {
      Alert.alert("이런, 로드스톤 연결에 문제가 생겼어요..","제주시에게 연락해 주세요",[{text: "종료", onPress: () => BackHandler.exitApp()}])
    }
  };
  componentDidMount(){
    this.getresponce();
  };
  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : <Searching />;
  };
}


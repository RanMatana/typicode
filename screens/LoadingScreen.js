import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const LoadingScreen = props => {
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(API_URL, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => {
        setData(json);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (data) {
      let timer1 = setTimeout(
        () => props.navigation.navigate('Home', {data}),
        3000,
      );
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [data]);

  if (data) {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <StatusBar hidden />
        <View style={styles.container}>
          <Text style={styles.contentTxt}>Loading...</Text>
        </View>
      </LinearGradient>
    );
  } else {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <StatusBar hidden />
      </LinearGradient>
    );
  }
};
export default LoadingScreen;

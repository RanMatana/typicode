import React, {useMemo, useCallback} from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import Row from '../components/Row';

const HomeScreen = props => {
  const data = useMemo(() => {
    return props.route.params.data;
  }, [props.route.params.data]);

  const renderItem = ({item, index}) => {
    return <Row key={index} item={item} onPress={onPress} />;
  };

  const onPress = useCallback(
    item => {
      props.navigation.navigate('Edit', {item});
    },
    [],
  );

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.content}>
          <Text style={styles.contentTxt}>Users</Text>
        </View>
        <FlatList
          data={data || []}
          keyExtractor={(item, key) => key.id}
          renderItem={renderItem}
        />
      </View>
    </LinearGradient>
  );
};
export default HomeScreen;

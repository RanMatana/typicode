import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style';

const Row = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.row}>
        <View style={{padding: 10}}>
          <Text style={styles.rowName}>{item.name}</Text>
          <Text style={styles.rowText}>{item.email}</Text>
          <Text style={styles.rowText}>
            {item.address.street + ' ' + item.address.city}
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.rowText}>phone{item.phone}</Text>
          <Text style={styles.rowText}>website {item.website}</Text>
          <Text style={styles.rowText}>company{item.company.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Row;

import React, {useMemo, useState} from 'react';
import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const EditScreen = props => {
  const item = useMemo(() => {
    return props.route.params.item;
  }, [props.route.params.item]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [web, setWeb] = useState('');
  const [company, setCompany] = useState('');

  const onSave = async () => {
    const ad = address.split(' ');
    const street = ad[0];
    const city = ad[1];
    const obj = {
      id: item.id,
      name: name.length !== 0 ? name : item.name,
      username: item.username,
      email: email.length !== 0 ? email : item.email,
      address: {
        street: street ? street : item.address.street,
        suite: item.address.suite,
        city: city ? city : item.address.city,
        zipcode: item.address.zipcode,
        geo: {
          lat: item.address.geo.lat,
          lng: item.address.geo.lng,
        },
      },
      phone: phone.length !== 0 ? phone : item.phone,
      website: web.length !== 0 ? web : item.website,
      company: {
        name: company.length !== 0 ? company : item.company.name,
        catchPhrase: item.company.catchPhrase,
        bs: item.company.bs,
      },
    };
    await putData(obj);
  };

  const putData = async obj => {
    await fetch(API_URL + `/${item.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(res => res.json())
      .then(json => {
        props.navigation.navigate('Home');
      })
      .catch(err => console.log(err));
  };
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <View style={styles.content}>
        <Text style={styles.contentTxt}>Edit</Text>
      </View>
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.viewInput}>
          <Text style={{color: 'white', padding: 10}}>Name: </Text>
          <TextInput
            style={styles.input}
            placeholder={item.name}
            onChangeText={t => setName(t)}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={{color: 'white', padding: 10}}>email: </Text>
          <TextInput
            style={styles.input}
            placeholder={item.email}
            onChangeText={t => setEmail(t)}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={{color: 'white', padding: 10}}>address: </Text>
          <TextInput
            style={styles.input}
            placeholder={item.address.street + ' ' + item.address.city}
            onChangeText={t => setAddress(t)}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={{color: 'white', padding: 10}}>phone: </Text>
          <TextInput
            style={styles.input}
            placeholder={item.phone}
            onChangeText={t => setPhone(t)}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={{color: 'white', padding: 10}}>website: </Text>
          <TextInput
            style={styles.input}
            placeholder={item.website}
            onChangeText={t => setWeb(t)}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={{color: 'white', padding: 10}}>company: </Text>
          <TextInput
            style={styles.input}
            placeholder={item.company.name}
            onChangeText={t => setCompany(t)}
          />
        </View>
        <TouchableOpacity onPress={() => onSave()} style={styles.submit}>
          <Text style={{fontSize: 24}}>Save</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default EditScreen;

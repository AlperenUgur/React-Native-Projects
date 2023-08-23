import React,{useState} from 'react';
import styles from './Login.style';
import {Formik} from 'formik';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import Input from '../../src/Input/input';
import Button from '../button/button';
//import usePost from '../hooks/usePost/usePost';
import Config from 'react-native-config';
const Login = ({navigation}) => {

  const [loading,setLoading]= useState(null);
  const handleLogin = values => {
  
    console.log(Config.API_AUTH_URL);
    console.log(values);
    fetch(Config.API_AUTH_URL + '/accounts/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => { 
        return response.json();
      })
      .then(res => {
        console.log(res);
        if (res.key) {
          Alert.alert('KEY', res.key);
          navigation.navigate('Anasayfa');
        }
      })
      .catch(error => {
        Alert.alert('norbit', 'tekrar deneyiniz');
      });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../asset/900967.png')} />
      </View>
      <Formik initialValues={{email: '', password: ''}} onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adı"
              values={values.email}
              onType={handleChange('email')}
              iconName="account"
            />
            <Input
              placeholder="Şifre"
              isSecure
              values={values.password}
              onType={handleChange('password')}
              iconName="airplane"
            />
            <Button text="Giriş" onPress={handleSubmit} loading={loading}/>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

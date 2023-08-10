import React from "react";
import styles from './Login.style';
import { Formik } from "formik";
import { SafeAreaView , View,Image, Alert } from 'react-native';
import Input from '../../src/Input/input'
import Button from "../button/button";
import usePost from "../hooks/usePost/usePost";
import Config  from "react-native-config";



const Login = (navigation)=> {

    const {data,loading,error,post} = usePost();
    function handleLogin(values){
        console.log(Config.REACT_APP_API_AUTH_URL);
        post(Config.API_AUTH_URL + '/Login',values);
        console.log(data)
    }
    

    if(error){
        Alert.alert('norbit','kullanıcı bulunamadı');
        
    }
    
    if (data) {
        if (data.status === "Error") {
            Alert.alert("norbit", "Kullanıcı Bulunamadı")
        } else {
           navigation.navigate('anasayfa')
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} 
                    source= {require('../asset/900967.png')}
                />
            </View>
            <Formik initialValues={{email:'', password:''}} 
            onSubmit={handleLogin}>
                { ({ handleSubmit,handleChange,values }) => 
                (
                    <View style={styles.body_container}>
                        <Input 
                        placeholder="Kullanıcı Adı" 
                        values={values.email}
                        onType={handleChange('email')}
                        iconName='account'
                        />
                        <Input 
                        placeholder="Şifre" 
                        isSecure 
                        values={values.password}
                        onType={handleChange('password')}
                        iconName='airplane'
                        />
                        <Button text= "Giriş" onPress={handleSubmit} loading={loading}/>
                    </View>
                )
                }
            </Formik>
        </SafeAreaView>
        
    )
};

export default Login;
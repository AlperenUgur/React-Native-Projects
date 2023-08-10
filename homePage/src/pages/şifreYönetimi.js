import { View } from "native-base";
import React from "react";

import { StyleSheet,Text } from "react-native";

function Sifre_Yonetimi(){
    return(
        <View>
            <Text style ={styles.text}>
                şifre yönetimi sayfası
            </Text>
        </View>
    )
}
export default Sifre_Yonetimi;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
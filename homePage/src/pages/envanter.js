import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function Envanter(){
    return(
        <View>
            <Text style ={styles.text}>
               envanter sayfası
            </Text>
        </View>
    )
}
export default Envanter;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
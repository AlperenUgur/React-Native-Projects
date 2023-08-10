import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function SatınAlmaİstek(){
    return(
        <View>
            <Text style ={styles.text}>
               Satın Alma İstek sayfası
            </Text>
        </View>
    )
}
export default SatınAlmaİstek;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
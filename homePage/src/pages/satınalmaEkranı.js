import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function SatınAlma(){
    return(
        <View>
            <Text style ={styles.text}>
               Satın Alma sayfası
            </Text>
        </View>
    )
}
export default SatınAlma;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
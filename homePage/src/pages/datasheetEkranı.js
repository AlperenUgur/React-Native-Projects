import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function Data_sheet(){
    return(
        <View>
            <Text style ={styles.text}>
               Data sheet ekranı
            </Text>
        </View>
    )
}
export default Data_sheet;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'

    }
})
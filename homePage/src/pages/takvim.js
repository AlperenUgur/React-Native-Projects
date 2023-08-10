import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function Takvim(){
    return(
        <View>
            <Text style ={styles.text}>
               Takvim
            </Text>
        </View>
    )
}
export default Takvim;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
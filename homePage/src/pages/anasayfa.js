import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function Anasayfa(){
    return(
        <View>
            <Text style ={styles.text}>
               Anasayfa
            </Text>
        </View>
    )
}
export default Anasayfa;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
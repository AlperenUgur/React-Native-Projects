import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function KnowHow(){
    return(
        <View>
            <Text style ={styles.text}>
               Know-How sayfası
            </Text>
        </View>
    )
}
export default KnowHow;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
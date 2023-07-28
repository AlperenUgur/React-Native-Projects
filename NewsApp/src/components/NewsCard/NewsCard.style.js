import { Dimensions,StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            backgroundColor:'white',
            flex:1,
            margin:10,
            borderRadius:10,

        },
        image:{
            height:Dimensions.get('window').height/2,
            borderTopLeftRadius:10,
            borderTopLeftRadius:10,
        },
        title:{
            fontSize: 13,
            fontWeight: 'bold',
            margin:10,
            color:'black'
        },
        description:{
           marginTop:3,
           textAlign:'left',
           
        },
        inner_container:{
            padding:10,
        },
        author:{
            fontStyle: 'italic',
            textAlign:'right'      
        }    
    }
)
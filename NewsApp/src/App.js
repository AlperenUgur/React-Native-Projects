import React from "react";

import { SafeAreaView,View,Text,FlatList, StyleSheet,ScrollView, Image, Dimensions} from 'react-native';

import news_data from './news_data.json'

import NewsCard from './components/NewsCard';

import banner_data from './news_banner_data.json'
function App(){

    const renderNews = ({item}) => <NewsCard news = {item}/>
    
    return(
        <SafeAreaView  style={styles.container}>
            <Text style={styles.title}>NEWS</Text>
                <FlatList
                ListHeaderComponent=
                {()=><ScrollView horizontal showsHorizontalScrollIndicator={false} >
                { 
                banner_data.map(bannerNews => 
                <Image style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}/>)
                }
                </ScrollView> 
                }
                    data={news_data}
                    renderItem={renderNews}
                   
                />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#eceff1',

    },

    banner_image:{
        height:Dimensions.get('window').height/5,
        width:Dimensions.get('window').width/2,
    },
    title:{
        textAlign:'center',
        fontWeight:'bold',
        color:'black',
        fontSize:35,

    }
})

export default App;
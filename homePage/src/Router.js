import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from 'native-base';
import personelEkranı from './pages/personelEkranı';
import şifreYönetimi from './pages/şifreYönetimi';
import Anasayfa from './pages/anasayfa';
import Data_sheet from './pages/datasheetEkranı';
import KnowHow from './pages/knowHowEkranı';
import Takvim from './pages/takvim';
import SatınAlma from './pages/satınalmaEkranı';
import SatınAlmaİstek from './pages/satınAlmaİstekEkranı';
import Envanter from './pages/envanter';
import Login from './login/Login';
const drawer = createDrawerNavigator();


function App(){

    return(
        <NativeBaseProvider>
            <NavigationContainer>
                <drawer.Navigator>
                    <drawer.Screen name="Login" component={Login}/>
                    <drawer.Screen name="Anasayfa" component={Anasayfa}/>
                    <drawer.Screen name="Personel ekranı" component={personelEkranı}/>
                    <drawer.Screen name="Şifre yönetimi" component={şifreYönetimi}/>
                    <drawer.Screen name="Datasheet ekranı " component={Data_sheet}/>
                    <drawer.Screen name="Know-how ekranı" component={KnowHow}/>
                    <drawer.Screen name="Takvim" component={Takvim}/>
                    <drawer.Screen name="Satın alma ekranı" component={SatınAlma}/>
                    <drawer.Screen name="Satın alma istek ekranı" component={SatınAlmaİstek}/>
                    <drawer.Screen name="Envanter" component={Envanter}/>
                </drawer.Navigator>
            </NavigationContainer> 
        </NativeBaseProvider>
    );

       
        
}
export default App;


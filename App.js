import 'react-native-gesture-handler';
import { useState,useEffect, useCallback} from 'react';
import {Button,StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatListScreen from './Screens/ChatListScreen';
import ChatSettingsScreen from './Screens/ChatSettingsScreen';



SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
export default function App() {

  const [appIsLoaded,setAppIsLoaded] = useState(false);
  const [count,setCount]=useState(0);
  const [customCount,setCustomCount]=useState(0);

   useEffect(()=>{
    //Load fonts
    setTimeout(() => {
    console.log("you will only see me once")
      const prepare= async()=>{
        try{
          await Font.loadAsync({
              //The Fonts
              "black": require("./assets/fonts//Roboto-Black.ttf"),
              "blackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
              "bold": require("./assets/fonts/Roboto-Bold.ttf"),
              "boldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
              "italic": require("./assets/fonts/Roboto-Italic.ttf"),
              "light": require("./assets/fonts/Roboto-Light.ttf"),
              "lightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
              "medium": require("./assets/fonts/Roboto-Medium.ttf"),
              "mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
              "regular": require("./assets/fonts/Roboto-Regular.ttf"),
              "thin": require("./assets/fonts/Roboto-Thin.ttf"),
              "thinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
          });
        }
        catch(error){
            console.error(error);
        }
        finally{
          setAppIsLoaded(true);
        } 
      };
      prepare();

    }, 2000);
  },[]);


  const onLayout=useCallback(async ()=>{
    console.log('inside onlayout1');
      if(appIsLoaded){
        console.log('inside onlayout2');
        await SplashScreen.hideAsync();
      }
  });

  if(!appIsLoaded){
    return null; //We need this code since "onLayout" never gets re-called
  }
  console.log('render count!');
  
  return ( 
    <SafeAreaProvider onLayout={onLayout}>    

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Home" component={ChatListScreen} />
            <Stack.Screen name = "ChatSettings" component={ChatSettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>

      
    </SafeAreaProvider>

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label:{
    color: 'black',
    fontSize: 18,
    fontFamily: 'regular'
  }
});
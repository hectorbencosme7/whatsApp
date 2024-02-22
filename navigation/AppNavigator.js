import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons,Ionicons } from '@expo/vector-icons';

import ChatListScreen from '../Screens/ChatListScreen';
import ChatSettingsScreen from '../Screens/ChatSettingsScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
      <Tab.Navigator
      screenOptions={{headerTitle:''}}>
        <Tab.Screen name="ChatList" component={ChatListScreen} 
            options={{
              tabBarLabel:'Chats',
              tabBarIcon : ({color})=>(
              <SimpleLineIcons name="bubble" size={24} color={color} />
              )
            }}/>
       <Tab.Screen name="Settings" component={SettingsScreen} 
            options={{tabBarLabel:'Settings',
            tabBarIcon : ({color})=>(
              <Ionicons name="settings" size={24} color={color}/>
              )
            }}/>
      </Tab.Navigator>
    );
  }

const AppNavigator = prop =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name = "Home" component={TabNavigator} 
                    options={{headerShown: false}}/>
            <Stack.Screen name = "ChatSettings" component={ChatSettingsScreen} 
            options={{headerTitle: "Settings",
                    headerBackTitle: "Back"           
            }} />
            </Stack.Navigator>
        </NavigationContainer>
    );


}
export default AppNavigator;
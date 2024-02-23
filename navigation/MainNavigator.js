import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons,Ionicons } from '@expo/vector-icons';

import ChatListScreen from '../Screens/ChatListScreen';
import ChatSettingsScreen from '../Screens/ChatSettingsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import ChatScreen from '../Screens/ChatScreen';

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

const MainNavigator = prop =>{
    return(
        <Stack.Navigator>
        <Stack.Screen name = "Home" component={TabNavigator} 
                options={{headerShown: false
        }}/>
        <Stack.Screen name = "ChatSettings" component={ChatSettingsScreen} 
        options={{headerTitle: "Settings",
                  headerBackTitle: "Back"           
        }} />
        <Stack.Screen name = "ChatScreen" component={ChatScreen} 
        options={{headerBackTitle: "Back",
                  headerTitle: ''           
        }}/>
        </Stack.Navigator>
    );
}
export default MainNavigator;
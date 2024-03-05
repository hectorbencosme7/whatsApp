import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import AuthScreen from '../Screens/AuthScreen';


const AppNavigator = prop =>{

    const isAuth=false;

    return(
        <NavigationContainer>
          { isAuth && <MainNavigator/> }
          { !isAuth && <AuthScreen/> }
        </NavigationContainer>
    );


}
export default AppNavigator;
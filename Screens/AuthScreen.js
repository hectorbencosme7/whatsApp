import React from "react";
import { Text, StyleSheet } from "react-native";
import PaigeContainer from "../Components/PaigeContainer";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthScreen = props =>{
    return <SafeAreaView style={{flex:1}}>
                <PaigeContainer style={{backgroundColor: 'yellow'}}>
                    <Text>Auth screen</Text>
                </PaigeContainer>
        </SafeAreaView>
};

export default AuthScreen;
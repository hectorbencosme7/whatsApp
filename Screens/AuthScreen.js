import React from "react";
import { Text, StyleSheet } from "react-native";
import PaigeContainer from "../Components/PaigeContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../Components/inputs";
import { FontAwesome } from "@expo/vector-icons";

const AuthScreen = props =>{
    return <SafeAreaView style={{flex:1}}>
                <PaigeContainer style={{}}>
                    <Input label="First name" icon="user-o" 
                    iconPack={FontAwesome}
                    />
                </PaigeContainer>
        </SafeAreaView>
};

export default AuthScreen;
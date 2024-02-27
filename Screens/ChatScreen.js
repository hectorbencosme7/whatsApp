import React from "react";
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity} from "react-native";
import backgroundImage from '../assets/Images/droplet.jpeg'
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import colors from "../Constants/colors.js"


const ChatScreen = props =>{
    return (
        <SafeAreaView style={styles.container}
        edges={['bottom','left','right']}>
              <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

             </ImageBackground>  

           
            <View style={styles.inputContainer}>
               <TouchableOpacity onPress={()=>{console.log("I was pressed")}}>
                 <Feather name="plus" size={24} color={colors.blue} />
               </TouchableOpacity>

                <TextInput/>

                <TouchableOpacity onPress={()=>{console.log("I was pressed")}}>
                 <Feather name="camera" size={24} color={colors.blue} />
               </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    backgroundImage:{
        flex:1
    },
    inputContainer:{
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50
    }
});
export default ChatScreen;
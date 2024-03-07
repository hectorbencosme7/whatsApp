import { StyleSheet, Text, TextInput, View } from "react-native"


import colors from "../Constants/colors";


const Input = props =>{
    return <View style={styles.container}>
            <Text>{props.label}</Text>
            <View style={styles.inputContainer}>
             {   
               props.icon && <props.iconPack 
               name={props.icon} size={props.inconSize || 15} 
               style={styles.icon} />
             }
             <TextInput/>
                
            </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        flex:1,
        backgroundColor: 'white'
    },
    inputContainer:{
        width: '100%',
        backgroundColor: colors.subtleWhite,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius:2,
        flexDirection: 'row',
        alignItems: "center"
    },
    icon:{
        marginRight: 10,
        color: colors.grey
    }
});

export default Input;
import { StyleSheet, Text, TextInput, View } from "react-native"


import colors from "../Constants/colors";


const Input = props =>{
    return <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.inputContainer}>
             {   
               props.icon && <props.iconPack 
               name={props.icon} size={props.inconSize || 15} 
               style={styles.icon} />
             }
             <TextInput 
                    style={styles.input}/>
                
            </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        flex:1,
        backgroundColor: 'white'
    },
    label: {
        marginVertical:8,
        fontFamily: 'bold',
        letterSpacing: 0.3,
        color: colors.textColor
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
    },
    input:{
       color: colors.textColor,
       flex: 1,
       fontFamily: 'regular',
       letterSpacing: 0.3,
       paddingTop: 0
    }
});

export default Input;
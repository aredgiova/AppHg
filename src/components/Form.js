import React from "react";
import  {StyleSheet, Text, TextInput, View} from "react-native";
import Colors from "../utils/Colors";
import colores from "../utils/Colors";


export default function Form(){
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                placeholder="Tokens" 
                keyboardType="numeric"
                style={styles.input}
            />
                <TextInput 
                placeholder="Dolar $" 
                keyboardType="numeric"
                style={[styles.input, styles.inputDolar]}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm:{
        position: "absolute",
        bottom: -120,
        width: "90%",
        paddingHorizontal: 25,
        backgroundColor: colores.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 150,
        justifyContent: "center",
    },
    viewInputs:{
        flexDirection: "row",
    },
    input:{
        height: 60,
        backgroundColor:"#ffff",
        borderWidth: 1, 
        boderColor: Colors.PRIMARY_COLOR,
        borderRadius: 5,
        with: "40%",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 5,
        color: "#oooo",
        paddingHorizontal: 40,
    },
    inputDolar:{
        with: "60%",
        marginLeft: 5,
    }
});
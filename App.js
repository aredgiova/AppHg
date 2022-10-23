import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from "./src/utils/Colors";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View>
     <StatusBar barStyle= "light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.titleApp}>Calcula Tus Ganancias</Text>
        <Text></Text>
        <Text> Selecciona la plataforma en la trabajas ->--- Ingresa la cantidad tokens hechos -> Selecciona el valor del Dolar.......</Text>
        <Text></Text>
        <Form />
      </SafeAreaView>
      <View>
        <Text>
          Resultado
        </Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea:{
   backgroundColor: colors.PRIMARY_COLOR,
   height: 200,
   borderBottomLeftRadius: 30, 
   borderBottomRightRadius: 30,
   alignItems: "center",
  },
  titleApp: {
    fontSize:25,
    fontWeight: "bold",
    color: "black", 
  }

})

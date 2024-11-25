import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function AddDestinationButton(){
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add')}>
            <Text style={styles.text}>
                {Platform.OS === 'ios' ? "Crear destination" : "Agregar destination"}
            </Text>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: Platform.select ({
        ios: {
            fontSize: 18,
            alignSelf: 'center',
            color: 'white',
            textAlign: 'center'
        }, 
        android: {
            fontSize: 18,
            alignSelf: 'center', 
            color: 'white',
            textAlign: 'center'
        }
      
    }), 
    button: Platform.select ({
        ios: {
            backgroundColor: '#b5e48c', 
            padding: '20', 
            flex: 1,
            width: '50%',
            borderRadius: 50,
            marginLeft: '50%'
        }, 
        android: {
            backgroundColor: '#034078', 
            padding: '20', 
            flex: 1,
            width: '50%',
            borderRadius: 50,
            marginRight: '50%'
        }  
    }) 
});
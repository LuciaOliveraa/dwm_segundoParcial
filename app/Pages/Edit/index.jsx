import { View, StyleSheet, Text, SafeAreaView, ImageBackground, TouchableOpacity, TextInput} from "react-native"
import { editDestination } from "../../Services/destinationsServices";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Edit({route}){
    const { destination } = route.params; 
    const id = destination.id;

    const navigation = useNavigation();

    const [name, setName] = useState(destination?.name);
    const [description, setDescription] = useState(destination?.description);
    const [difficulty, setDifficulty] = useState(destination?.difficulty);


    async function modifyDestination(){
        try {
            const editedDestination = {
                name: name, 
                description: description, 
                difficulty: difficulty,
                favorites: destination?.favorites
            }
            
            await editDestination(destination.id, editedDestination);
            navigation.navigate(navigation.navigate('Details', { id }));  

        } catch (error) {
            console.error('Error editing destination: ', error)
        }
    }

    return (
        <View
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>Editar {destination.name}</Text>

                    <View style={styles.infoContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Nombre</Text>
                            <TextInput 
                                value={name}
                                onChangeText={setName}
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Descripción</Text>
                            <TextInput 
                                value={description}
                                onChangeText={setDescription}
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Dificultad</Text>
                            <TextInput 
                                value={difficulty}
                                onChangeText={setDifficulty}
                                style={styles.input}
                            />
                        </View>
                        
            
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details', { id: destination.id })}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={modifyDestination}> 
                            <Text style={styles.buttonText}>Guardar cambios</Text>
                        </TouchableOpacity>
                    </View>
                </View>   
            </SafeAreaView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: '100%',
        backgroundColor: 'pink'
    },
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        display: 'flex', 
        alignItems:'center',
        justifyContent: 'space-around', 
        width: '85%', 
        height: '85%', 
        gap: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        padding: 30
    },
    title: {
      fontWeight: 800,
      fontSize: 45,
    }, 
    boldText: {
        fontWeight: 'bold'
    }, 
    text: {
        fontSize: 20, 
    }, 
    infoContainer: {
        gap: 10,
        width: '100%'
    }, 
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row', 
        gap: 10
    }, 
    button: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15, 
        borderRadius: 50
    }, 
    buttonText: {
        alignSelf: 'center', 
        fontSize: 18
    }, 
    input: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10, 
        borderRadius: 50,
        fontSize: 18
    }, 
    inputContainer: {
        gap: 5
    }
});
  
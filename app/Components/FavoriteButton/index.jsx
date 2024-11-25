import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { editDestination } from "../../Services/destinationsServices";

export default function FavoriteButton({ destination, setDestination }){

    const [isMyFavorite, setIsMyFavorite] = useState(false);
    const [favorites, setFavorites] = useState(destination.favorites);

    async function handleAddFavorite() {
        const updatedDestination = {
            name: destination?.name,
            description: destination?.description,
            difficulty: destination?.difficulty,
            favorites: favorites + 1,
        }
        
        setIsMyFavorite(true);
        const data = await editDestination(destination.id, updatedDestination)
        setFavorites(data?.favorites);
        setDestination(data.id, data);
    }

    async function handleDeleteFavorite() {
        const updatedDestination = {
            name: destination?.name,
            description: destination?.description,
            difficulty: destination?.difficulty,
            favorites: favorites - 1,
        }
        
        setIsMyFavorite(false);
        const data = await editDestination(destination.id, updatedDestination)
        setFavorites(data?.favorites);
        setDestination(data.id, data);
    }

    return (
        <View style={styles.button}>
            <TouchableOpacity>
                <AntDesign name="pluscircle" size={20} color="pink" onPress={handleAddFavorite} style={styles.sign}/>
            </TouchableOpacity>
            
            {!isMyFavorite && <AntDesign name="staro" size={30} color="orange" />}
            {isMyFavorite && <AntDesign name="star" size={30} color="orange" />}
        
            <Text style={styles.text}>
                {favorites}
            </Text>

            <TouchableOpacity>
                <AntDesign name="minuscircle" size={20} color="pink" onPress={handleDeleteFavorite} style={styles.sign}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'orange',
        textAlign: 'center'
    }, 
    button: {
        alignSelf: 'center'
    },
    sign: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5
    }
});
import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FavoriteButton from "../FavoriteButton";

export function DestinationCard({destination, setDestination}) {
    const navigation = useNavigation();

    const id = destination.id;

    return(
        <View style={styles.card} >
            <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Details', { id })}>
                { destination.difficulty == 'Fácil' && <View style={styles.destinationEasy}/>}
                { destination.difficulty == 'Moderada' && <View style={styles.destinationMedium}/>}
                { destination.difficulty == 'Difícil' && <View style={styles.destinationDifficult}/>}
                <View style={styles.textContainer}>
                    <Text style={styles.destinationName}> {destination.name} </Text>
                </View>
                <FavoriteButton destination={destination} setDestination={setDestination}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    destinationEasy: {
        width: 20,
        height: 100,
        margin: 10,
        marginLeft: 30,
        backgroundColor: 'green',
        borderRadius: 20
    },
    destinationMedium: {
        width: 20,
        height: 100,
        margin: 10,
        marginLeft: 30,
        backgroundColor: 'yellow',
        borderRadius: 20
    },
    destinationDifficult: {
        width: 20,
        height: 100,
        margin: 10,
        marginLeft: 30,
        backgroundColor: 'purple',
        borderRadius: 20
    },
    destinationName: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'pink',
        fontSize: 16
    },
    textContainer: {
        width: '60%',
        justifyContent: 'center'
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        height: '140',
        flexDirection: 'row'
    },
    touchable: {
        margin: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        height: '90%'
    }
})
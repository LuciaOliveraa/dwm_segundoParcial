import React, { useEffect, useState } from "react";
import { getDestinations } from "../../Services/destinationsServices";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { DestinationCard } from "../DestinationCard";


export function DestinationsScroll({ destinations, setDestination }) {

    const [ sortedDestinations, setSortedDestinations ] = useState([...destinations]);

    const handleOrderDestinations = () => {
        const actuallySortedDestinations = [...destinations].sort((a, b) => {
            const favoritesA = Number(a?.favorites);
            const favoritesB = Number(b?.favorites);
            return favoritesB - favoritesA;
        });
        setSortedDestinations(actuallySortedDestinations);
        console.log("sorted destinations: ", actuallySortedDestinations);
    };

    useEffect(() => {
        handleOrderDestinations();
        console.log("ordenando destinations ");
    }, [destinations]);
    
    return (
        <View style={styles.root}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}> UCU VIAJES </Text>
                <FlatList
                    data={sortedDestinations}
                    renderItem={({ item }) => <DestinationCard destination={item} setDestination={setDestination}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        marginBottom: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 1000,
    }
})
import React, {useState, useEffect} from "react";
import { DestinationsScroll } from "../../Components/DestinationsScroll";
import { SafeAreaView, View, StyleSheet } from "react-native";
import AddDestinationButton from "../../Components/AddDestinationButton";
import { getDestinations } from "../../Services/destinationsServices";

export default function Home() {

    const [ destinations, setDestinations] = useState([]);

    const fetchDestinations = async () => {
        const data = await getDestinations();
        console.log("destinations: ", data);
        setDestinations(data);
    }

    useEffect(() => {
        fetchDestinations();
    }, []);

   function setDestination(destinationId, updatedDestination) {
    const updatedDestinations = destinations.map((destination) => (
        destination.id == destinationId ? updatedDestination : destination
    ));
    setDestinations(updatedDestinations);
   }

    return (
        <View style={styles.root}>
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.container}>
                <DestinationsScroll destinations={destinations} setDestination={setDestination} ></DestinationsScroll>

                <View style={styles.buttonContainer}>
                    <AddDestinationButton></AddDestinationButton>
                </View>
            </View>
            

        </SafeAreaView>
        </View>
    );

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    homeContainer: {
        flex: 1,
        width: '85%',
        height: '85%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    container: {
        alignItems:'center',
        width: '85%', 
        height: '85%', 
        gap: 20
    },
    buttonContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: 20
    }
})
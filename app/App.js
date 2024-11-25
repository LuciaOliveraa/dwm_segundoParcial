import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

const Stack = createNativeStackNavigator();

export default function App() { 

  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, gestureEnabled: false }}
          >
        </Stack.Screen>

        <Stack.Screen 
          name='Details'
          component={Details}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name='Add'
          component={Add}
          options={{headerShown: false}}
        />  

        <Stack.Screen 
          name='Edit'
          component={Edit}
          options={{headerShown: false}}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

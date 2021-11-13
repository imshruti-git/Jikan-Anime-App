
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Details from '../screens/details';


const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
      name="Jikan Anime"
      component={Home}
      />
      <Stack.Screen 
      name="Details" 
      component={Details} 
      />
    </Stack.Navigator>
  );
}



          
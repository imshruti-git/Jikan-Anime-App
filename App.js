
import React from 'react';
import MyStack from './routes/myStack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
export default function App() {
  return (
   // <Home />
    <NavigationContainer>
      <MyStack />
   </NavigationContainer>
    //<Navigator />
  );
}


  

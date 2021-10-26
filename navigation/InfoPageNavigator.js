import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoPage from "../screens/InfoPage/InfoPage";
import Hospital from "../screens/Hospital/Hospital";

const Stack = createNativeStackNavigator();
const InfoPageNavigator = () => (

  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name='InfoPage' component = {InfoPage}/>
    <Stack.Screen name='Hospital' component = {Hospital}/> 
  </Stack.Navigator>

);

export default InfoPageNavigator;

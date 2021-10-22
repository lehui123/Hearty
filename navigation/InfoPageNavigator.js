import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoPage from "../screens/InfoPage/InfoPage";
import Hospitals from "../screens/Hospitals/Hospitals";
const Stack = createNativeStackNavigator();
const InfoPageNavigator = () => (

  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name='InfoPage' component = {InfoPage}/>
    <Stack.Screen name='Hospitals' component = {Hospitals}/>
  </Stack.Navigator>

);

export default InfoPageNavigator;

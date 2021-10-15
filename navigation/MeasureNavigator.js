import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Measure from "../screens/Measure/Measure";
import History from "../screens/History/History";
const Stack = createNativeStackNavigator();
const MeasureNavigator = () => (

  <Stack.Navigator
    initialRouteName = 'Welcome'
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name='Measure' component = {Measure}/>
    <Stack.Screen name='History' component = {History}/>
  </Stack.Navigator>

);

export default MeasureNavigator;

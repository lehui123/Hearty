import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";
import Welcome from "../screens/Welcome/Welcome";
import HomeNavigator from "./HomeNavigator";
const Stack = createNativeStackNavigator();
const LoginNavigator = () => (

  <Stack.Navigator
    initialRouteName = 'Login'
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen name='Welcome' component = {Welcome}/> */}
    <Stack.Screen name='Login' component = {Login}/>
    <Stack.Screen name='Signup' component = {Signup}/>
    <Stack.Screen name='HomeNavi' component = {HomeNavigator}/>
  </Stack.Navigator>

);

export default LoginNavigator;

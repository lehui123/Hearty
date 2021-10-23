import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../screens/Profile/Profile";
import History from "../screens/History/History";
import LoginNavigator from "./LoginNavigator";
const Stack = createNativeStackNavigator();
const ProfileNavigator = () => (

  <Stack.Navigator
    initialRouteName = 'Profile Page'
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name='Profile Page' component = {Profile}/>
    <Stack.Screen name='History' component = {History}/>
    <Stack.Screen name='LoginNavi' component = {LoginNavigator}/>
  </Stack.Navigator>

);

export default ProfileNavigator;

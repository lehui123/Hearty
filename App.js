
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './navigation/HomeNavigator';
import LoginNavigator from './navigation/LoginNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time'])
export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator/> 
    </NavigationContainer>
  );
}

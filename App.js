
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './navigation/HomeNavigator';
import LoginNavigator from './navigation/LoginNavigator';

//For Zijia: If you want view your HomeNavigator, change StackNavigator to HomeNavigator
export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator/> 
    </NavigationContainer>
  );
}

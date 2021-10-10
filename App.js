
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './navigation/HomeNavigator';
import LoginNavigator from './navigation/LoginNavigator';
import Login from './screens/Login/Login';

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator/> 
    </NavigationContainer>
  );
}

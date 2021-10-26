
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import ProfileNavigator from "./ProfileNavigator";
import Measure from "../screens/Measure/Measure";
import InfoPageNavigator from "./InfoPageNavigator";
import Colour from "../components/Colour";
import Home from "../screens/Home/Home"

const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Tab.Navigator
    initialRouteName = 'Home'
    screenOptions={{
      tabBarActiveBackgroundColor: Colour.brand,
      tabBarActiveTintColor: Colour.primary,
      tabBarInactiveBackgroundColor: Colour.tertiary,
      tabBarInactiveTintColor: Colour.primary,
      headerShown: false}}>
    
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color, focused }) => (
          <MaterialCommunityIcons name="home" color={color} focused = {focused} size={25} />
        )
      }}
    />
    <Tab.Screen
      name="Measure"
      component={Measure}
      options={{
        tabBarIcon: ({color, focused }) => (
          <MaterialCommunityIcons name="pulse" color={color} focused = {focused} size={25} />
        )
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({color, focused }) => (
          <MaterialCommunityIcons name="account" color={color} focused = {focused} size={25} />
        )
      }}
    />
    <Tab.Screen
      name="Info"
      component={InfoPageNavigator}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name="information-outline" color={color} focused={focused} size={25} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default HomeNavigator;
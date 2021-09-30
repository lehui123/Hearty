
import React from "react";
import {View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Measure from "../screens/Measure/Measure";
import Profile from "../screens/Profile/Profile";
import InfoPage from "../screens/InfoPage/InfoPage";
import Colour from "../components/Colour"
import { ImageBackgroundBase } from "react-native";
import { ColorAndroid } from "react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: Colour.brand,
      tabBarActiveTintColor: Colour.primary,
      tabBarInactiveBackgroundColor: Colour.tertiary,
      tabBarInactiveTintColor: Colour.primary,}}>
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color, focused }) => (
          <MaterialCommunityIcons name="account" color={color} focused = {focused} size={25} />
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
      name="Info"
      component={InfoPage}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name="information-outline" color={color} focused={focused} size={25} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default HomeNavigator;
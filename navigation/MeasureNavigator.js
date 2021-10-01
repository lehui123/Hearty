
import React from "react";
import {View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Measure from "../screens/Measure/Measure";
import History from "../screens/History/History";
import Colour from "../components/Colour";

const Tab = createBottomTabNavigator();


const MeasureNavigator = () => (
    <Tab.Navigator
      screenOptions={{
      tabBarActiveBackgroundColor: Colour.brand,
      tabBarActiveTintColor: Colour.primary,
      tabBarInactiveBackgroundColor: Colour.tertiary,
      tabBarInactiveTintColor: Colour.primary,
      headerShown: false}}>
    
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
      name="History"
      component={History}
      options={{
        tabBarIcon: ({color, focused }) => (
          <MaterialCommunityIcons name="history" color={color} focused = {focused} size={25} />
        )
      }}
    />
    </Tab.Navigator>
);

export default MeasureNavigator;
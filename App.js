
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from "./navigation/HomeNavigator";

// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (

//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: {backgroundColor: "dodgerblue"},
//       headerTintColor: "white",
//     }}>
//       <Stack.Screen 
//         name='Testing1' 
//         component = {Testing1}
//         options={{
//           headerStyle: {backgroundColor: "tomato"},
//           headerTintColor: "white",
//           // headerShown: false,
//         }}/>
//       <Stack.Screen name='Testing2' component = {Testing2}/>
//   </Stack.Navigator>

// )

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor:'tomato',
//       activeTintColot:"white",
//       inactiveBackgroundColor:'#eee',
//       inactiveTintColot:"black",
//     }}>
//     <Tab.Screen name="Feed" component={Testing1}/>
//     <Tab.Screen name="Account" component={Account}/>
//   </Tab.Navigator>
// )
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//     initialRouteName = 'Home'
//     tabBarOptions={{
//       activeBackgroundColor:'tomato',
//       activeTintColot:"white",
//       inactiveBackgroundColor:'#eee',
//       inactiveTintColot:"black",
//     }}>
//     <Tab.Screen name="Home" component= {Home}/>
//     <Tab.Screen name="Profile" component= {Profile}/>
//     <Tab.Screen name="Measure" component= {Measure}/>
//     <Tab.Screen name="InfoPage" component= {InfoPage}/>
//   </Tab.Navigator>
// )
export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

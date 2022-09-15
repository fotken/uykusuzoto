import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';



const App = () => {
 
  
  return (
 
 <NavigationContainer screenOptions={{ }}>
      <DrawerNavigator screenOptions={{  }} />
 </NavigationContainer>

  );
}
export default App;

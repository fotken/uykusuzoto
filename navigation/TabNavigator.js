import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "../constants/styles";
import { MainStackNavigator, PaketStackNavigator, ContactStackNavigator, BayiStackNavigator } from "./StackNavigator";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {



  return (

    <Tab.Navigator 
    initialRouteName="Ana Sayfa" 
    screenOptions={{
      tabBarActiveTintColor: '#00FFFF',
      tabBarInactiveTintColor: GlobalStyles.colors.primary,
     
    }}>
      
      <Tab.Screen
        name="Ana Sayfa"
        component={MainStackNavigator}
        options={{
          headerShown: false, 
          tabBarLabel: 'Ana Sayfa',
           tabBarIcon:  ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
          ),
        }} />
     
        
      
      <Tab.Screen 
      name="Paketler" 
      component={PaketStackNavigator} 
      options={{
        headerShown: false, 
        tabBarLabel: 'Paketler',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="appstore-o" size={size} color={color} />
        ),
      }} />  
       
<Tab.Screen 
        name="TabHesabım" 
        component={ContactStackNavigator} 
        options={{
        headerShown: false, 
        tabBarLabel: 'Hesabım',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
  }} />
  

  <Tab.Screen 
        name="BayiHesap" 
        component={BayiStackNavigator} 
        options={{
        headerShown: false, 
        tabBarLabel: 'Bayi Ol',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }} />
     



    </Tab.Navigator>
  );
};

export default TabNavigator;
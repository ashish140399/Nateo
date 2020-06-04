
import 'react-native-gesture-handler';
import React from 'react';
import HomeLayout from './HomeLayout.js';
import Login from './auth/Login.js';
import Navigator from './homestack.js';
import { NavigationContainer } from '@react-navigation/native';


export default function App(){
  return (
    
    <NavigationContainer><Login/></NavigationContainer>
    
  );
};


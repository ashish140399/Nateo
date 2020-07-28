
import 'react-native-gesture-handler';
import React from 'react';
import HomeLayout from './HomeLayout.js';
import Maps from './maps.js';
import Login from './auth/Login.js';
import Signup from './auth/signup.js';
import Navigator from './homestack.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Maps">
      <Stack.Screen options={{headerShown: false}} name="Maps" component={Maps} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
        <Stack.Screen options={{headerShown: false}} name="HomeLayout" component={HomeLayout} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


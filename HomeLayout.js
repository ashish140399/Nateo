import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native';
import Navbar from './navbar/navbar.js';
import Section from './section/section.js';
import Signup from './auth/signup.js';

import TrackStatus from './TrackOthers/Trackstatus.js';
export default class HomeLayout extends Component{
render() {
    return (
        <View style={{display:'flex',justifyContent:'space-between',flexDirection:'column',flex:1}}>
            <Navbar/>
            <Section />
            <TrackStatus/>
        
        </View>
    );
}
};



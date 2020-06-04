import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, View, Text,ScrollView} from 'react-native';
import UserRow from './UserRow.js';
import Icon from 'react-native-vector-icons/FontAwesome';
class TrackStatus extends Component{



  constructor( props ) {
    super( props );
    
  }


  render() {
    return(
      
        <View  style={{height:200}}>
<Icon name="bars" color="#4F8EF7" size={30}/>

      
        <Text style={{fontSize:20,fontWeight:'500',textAlign:'center',backgroundColor:'#81ecec',borderTopRightRadius:10,borderTopLeftRadius:10,paddingTop:15,paddingBottom:15}} >Track Others</Text>
        <ScrollView>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            <UserRow/>
            </ScrollView>
        </View>
        
    );
  };
};

const styles = StyleSheet.create({
  StopwatchBoxctrl_btn:{
    padding:20,
    display:'flex',
  },
  StopwatchBoxcontrols:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10,
  },
  StopwatchBox:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    fontSize:24,

  },
    navbar:{
     

        paddingTop:15,
        paddingBottom:15,
           

    },

});

export default TrackStatus;
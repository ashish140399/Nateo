import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, View,Text, Image} from 'react-native';
class UserRow extends Component{



  constructor( props ) {
    super( props );

    
  }


  render() {
    return(
        <View>
            <View style={{display:"flex",flexDirection:'row',alignItems:'center',paddingLeft:30,paddingRight:30,backgroundColor:'#f0f0f0',paddingTop:10,paddingBottom:10,justifyContent:'space-around'}}>
                
                <Image source = {require('../images/profileg.jpg')} style={{width:50,height:50,borderRadius:50,marginRight:15}}/>
                <Text style={{marginRight:15}}>Ashish Kumar</Text>
                <View style={{marginRight:15}}>
                    <View style={{display:"flex",flexDirection:'row',alignItems:'center'}}><Text>2h</Text><Text>27m</Text></View>
                    <Text style={{fontSize:8}}>Today</Text>
                </View>
                <View>
                    <View style={{display:"flex",flexDirection:'row',alignItems:'center'}}><Text>2h</Text><Text>27m</Text></View>
                    <Text style={{fontSize:8}}>This Week</Text>
                </View>
            </View>
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

export default UserRow;
import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, View,Text, Image} from 'react-native';
import Firebase from '../auth/firebase.js'
class UserRow extends Component{



  constructor( props ) {
    super( props );
    
    
  }

  
  
  render() {
    return(
        <View>
            <View style={styles.userrowmain}>
                <View>
                <Image source = {require('../images/profileg.jpg')} style={{width:50,height:50,borderRadius:50,marginRight:15}}/>
                <Text  style={[styles.onlinestatus, this.props.online == false ? styles.onlinestatustrue : styles.onlinestatusfalse]} ></Text>
                </View>
                
                <Text style={{marginRight:15}}>{this.props.username}</Text>
                <View style={{marginRight:15}}>
                    <View style={{display:"flex",flexDirection:'row',alignItems:'center'}}><Text>{this.props.hour} :</Text><Text>{this.props.minute} :</Text><Text> {this.props.seconds}</Text></View>
                    <Text style={{fontSize:8}}>Today</Text>
                </View>
                <View>
                    <View style={{display:"flex",flexDirection:'row',alignItems:'center'}}><Text>--</Text><Text>--</Text></View>
                    <Text style={{fontSize:8}}>This Week</Text>
                </View>
            </View>
        </View>
    );
  };
};

const styles = StyleSheet.create({
  userrowmain:{
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:30,
    paddingRight:30,
    backgroundColor:'#f0f0f0',
    paddingTop:10,
    paddingBottom:10,
    justifyContent:'space-around'
  },
  onlinestatus:{
    width:10,
    height:10,
    position:'absolute',
    borderRadius:10,
    right:18,
    bottom:0,
  },
  onlinestatustrue:{backgroundColor:'blue'},
  onlinestatusfalse:{backgroundColor:'#A9A9A9'},

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
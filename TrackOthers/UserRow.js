import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, View,Text, Image} from 'react-native';
import Firebase from '../auth/firebase.js'
class UserRow extends Component{



  constructor( props ) {
    super( props );

    
  }

  componentDidMount(){
    var useridref = Firebase.database().ref("userid/" + User.uid);
    useridref.on('value', ((snapshot) => {
       console.log(snapshot.val());
    }));
  }

  
  render() {
    return(
        <View>
            <View style={{display:"flex",flexDirection:'row',alignItems:'center',paddingLeft:30,paddingRight:30,backgroundColor:'#f0f0f0',paddingTop:10,paddingBottom:10,justifyContent:'space-around'}}>
                <View>
                <Image source = {require('../images/profileg.jpg')} style={{width:50,height:50,borderRadius:50,marginRight:15}}/>
                <Text  style={styles.onlinestatus}></Text>
                </View>
                
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
  onlinestatus:{
    width:10,
    height:10,
    backgroundColor:'#A9A9A9',
    position:'absolute',
    borderRadius:10,
    right:18,
    bottom:0,
  },
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
import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, View, Text,ScrollView,Image, Button,FlatList} from 'react-native';
import UserRow from './UserRow.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Firebase from '../auth/firebase.js' 


import Modal from 'react-native-modal';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';



class TrackStatus extends Component{



  constructor( props ) {
    super( props );
    
    this.state = {
      isModalVisible: false,
      searchusername:'',
      items: []
    };
  }
  
 
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };




  searchuser = (text) => {
    this.setState({ searchusername: text })
 }


 searchuserbtnf = () => {
  Firebase.database().ref("userid").once("value").then((snapshot) => {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.val().greet;
      var refs = childSnapshot.val();
      var Username = childSnapshot.val().Username;
   
      console.log(refs);
  }) })
 } 

 injecttrackothers = () =>{
 
 }




componentDidMount(){



Firebase.database().ref("userid").on("value",snapshot => {
   
  let data = snapshot.val();
  let itemsa = Object.values(data);
  this.setState({ items:itemsa });
  console.log(this.state.items)
 

})



}






  render() {
    return(
      
        <View style={{height:200}}>

        {/*<Modal isVisible={this.state.isModalVisible}>
          <View style={{flex: 1}} style={styles.Mymodal}>
            <View style={styles.searchbox}>
              <TextInput  style={styles.Mymodalinput} onChangeText = {this.searchuser}></TextInput>
              <TouchableOpacity>
                <Text style={styles.seachuserbtn} onPress={this.injecttrackothers}>
                  Search
                </Text>
              </TouchableOpacity>
              
            </View>
            <View>
                <View style={styles.usertrackrow}>
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Image source = {require('../images/profileg.jpg')} style={{width:50,height:50,borderRadius:50,marginRight:15}}/>
                    <Text style={{marginRight:15}}>Ashish Kumar</Text>
                  </View>
                  <View>
                    <Icon name="plus" color="#4F8EF7" size={24} style={styles.Mymodaladd} />
                  </View>      
                </View>
            </View>
            <Text  onPress={this.toggleModal} style={styles.Mymodalcancel}>Done..</Text>
          </View>
        </Modal>*/}
      <View style={{width:'100%',display:'flex',flexDirection:'row',backgroundColor:'#f53b57',borderTopRightRadius:5,borderTopLeftRadius:5,paddingTop:10,paddingBottom:10,justifyContent:'center',paddingRight:20,paddingLeft:20}}>
          {/*<Icon name="bars" color="#4F8EF7" size={30}/>*/}

          <Text style={{fontSize:14,fontWeight:'500',textAlign:'center',color:'#fff'}} >Your friends</Text>
          {/*<Icon name="plus-circle" color="#4F8EF7" size={30} onPress={this.toggleModal}/>*/}
        </View>
      
        <FlatList  
          data={this.state.items}  
          
          renderItem={({item}) =>  <UserRow online={item.watchstatus}  username={item.Username} hours={item.minute} minutes={item.seconds}></UserRow>}   
        />

        </View>
        
    );
  };
};

const styles = StyleSheet.create({
  seachuserbtn:{
    backgroundColor:'skyblue',
    color:'#fff',
    height:'auto',
    padding:10,
    paddingRight:20,
    paddingLeft:20,
    margin:5,
    borderRadius:10,

  },
  searchbox:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#f0f0f0',
    borderRadius:10,
    alignItems:'center'
    
  },
  usertrackrow:{
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:30,
    justifyContent:'space-between',
    paddingRight:30,
    backgroundColor:'#888',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:8,
    marginTop:10
  },
  Mymodalseacrh:{
    position:'absolute',
    right:10,
    top:6
  },
  Mymodaladd:{
  },
  Mymodal:{
    backgroundColor:'#fff',
    height:300,
    padding:15,
  },
  Mymodalinput:{
    width:'auto',
    flex:1,
    padding:8,
    display:'flex'
  },
  Mymodalcancel:{
    backgroundColor:'#f53b57',
    paddingTop:12,
    paddingBottom:12,
    textAlign:'center',
    color:'#fff',
    fontSize:17,
    fontWeight:'600',
    borderRadius:5,
    marginTop:10
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

export default TrackStatus;
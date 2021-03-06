import React, { Component } from 'react'
import { ImageBackground,Text,Alert, StyleSheet, View, Image,TextInput, TouchableOpacity } from 'react-native'

import Firebase from './firebase.js' 
var user;
global.User=user;
var snapshotval;
global.Snapshotval=snapshotval;
export default class Login extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    loginUser = (email,password) =>{
        
        try{

                Firebase.auth().signInWithEmailAndPassword(email,password).then(()=> {
                    user = Firebase.auth().currentUser;
                    User=user;
                    if (user) {
   
                        var useridref = Firebase.database().ref("userid/" + user.uid);
                        useridref.on('value', function(snapshot) {snapshot.val();});
                        this.props.navigation.navigate('HomeLayout')
                        
                    }
                })
          
            setTimeout
        }
        catch(error){
            console.log(error.toString())
        }
     
     }



    render() {
        return (
            <View style={styles.container}>
                
                <ImageBackground source={require('../images/signup2.png')} style={styles.image}>
                    <View style={styles.containerinner}>
                        <View style={{width:150,height:150,borderRadius:150,marginBottom:20}}>
                            <Image source = {require('../images/dog2.gif')} style={{ overlayColor: '#ADEDF9',width:150,height:150,borderRadius:150}}/>
                        </View>
                        <TextInput placeholder="E-mail" style={styles.input} onChangeText={(email) => this.setState({email})}></TextInput>
                        <TextInput  placeholder="Password" style={styles.input} onChangeText={(password) => this.setState({password})}></TextInput>
                        <TouchableOpacity onPress={()=>this.loginUser(this.state.email,this.state.password)}>
                            <Text  style={styles.buttonlogin} >Let's Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}}>
                            <Text  style={styles.buttonlogin} >First time? Sign in..</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        
       
    },
    containerinner:{
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        backgroundColor:'rgba(255,255,255,0.8)',
        width:280,
        borderRadius:10,
        paddingLeft:10,
        marginBottom:15
    },
    buttonlogin:{
        backgroundColor:'#f53b57',
        width:280,
        borderRadius:10,
        paddingLeft:10,
        marginTop:15,
        paddingTop:12,
        paddingBottom:12,
        textAlign:'center',
        color:'#fff',
        fontSize:17,
        fontWeight:'600',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
})

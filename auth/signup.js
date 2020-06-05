import React, { Component } from 'react'
import { ImageBackground,Text, StyleSheet, View, Image,TextInput, TouchableOpacity } from 'react-native'
import Firebase from './firebase.js' 



export default class Signup extends Component {


    constructor(props)
    {console.log('hi');
        super(props);
        this.state = {
            email:'',
            password:'',
            name:'',
            username:'',
            error:'',
            errValue:0

        }
    }

    signupUser = (email,password,name,username) =>{
        console.log(password.length)
        
        try{
            if(email.length==0)
            {
                this.setState({error:'Fill all the fields',errValue:1})
            }
            else if(password.length < 6){
                this.setState({error:'Enter atleast 6 characters',errValue:1})
            }
            if(this.state.errValue==0)
            {
                Firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
                    var uid,user;
                    user = Firebase.auth().currentUser;
                    var Userinfoinit = Firebase.database().ref("userid/" + user.uid);
                    console.log(user.uid)
                    Userinfoinit.set({
                        Name: name,
                        Username:username,   
                        greet:'Congo, you are added',
                        hour:'00',
                        minute: '00',
                        seconds: '00',
                        watchstatus: true,
                        Buttonstatus:'Start'             
                    });
                })
            
            }
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
                        <TextInput placeholder="Name" style={styles.input} onChangeText={(name) => this.setState({name})}></TextInput>
                        <TextInput placeholder="Username" style={styles.input} onChangeText={(username) => this.setState({username})}></TextInput>
                        <TextInput placeholder="E-mail" style={styles.input} onChangeText={(email) => this.setState({email})}></TextInput>
                        <TextInput placeholder="Password" style={styles.input} onChangeText={(password) => this.setState({password})}></TextInput>
                        <TouchableOpacity>
                            <Text  style={styles.buttonlogin} onPress={()=>this.signupUser(this.state.email,this.state.password,this.state.name,this.state.username)}>Let's Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text  style={styles.buttonlogin} onPress={()=>{this.props.navigation.navigate('Login')}}>Already Signed Up? Log in..</Text>
                        </TouchableOpacity>
                        <Text>{this.state.error}</Text>
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
        fontSize:16,
        fontWeight:'600',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
})

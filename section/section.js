import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, View, Text,Button,AppState} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import LinearGradient from 'react-native-linear-gradient';
const buttonchangetext = "Hey, I am active";
import Firebase from '../auth/firebase.js' 



var stopwatchAction;
class Section extends Component{



  constructor( props ) {
    super( props );
    

    this.startButton = this.startButton.bind(this);
    this.state = {
      hour:'--',
      minute: '--',
      seconds: '--',
      watchstatus: false,
      Buttonstatus:'Start',
      Username:'ash',
      appState: AppState.currentState
    }
     
    
    
    
  }

  componentDidMount(){
    var useridref = Firebase.database().ref("userid/" + User.uid);
    useridref.once("value").then((snapshot) => {
       this.setState({Username:snapshot.val().Username});
       this.setState({seconds:snapshot.val().seconds});
       this.setState({minute:snapshot.val().minute});
       this.setState({hour:snapshot.val().hour});
       this.setState({watchstatus:snapshot.val().watchstatus});
    });
    AppState.addEventListener('change', this._handleAppStateChange);

   
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/)) {
      clearInterval(stopwatchAction);
      this.setState({Buttonstatus:'Start',watchstatus:true});
      Firebase.database().ref('userid/' + User.uid).update({
        watchstatus:this.state.watchstatus
      });
    }
    this.setState({appState: nextAppState});
  }



  timerstatus = ()=>{
    if(Number(this.state.seconds)<9){
      this.state.seconds='0'+(Number(this.state.seconds) + 1).toString();  
    }else{
      this.state.seconds=(Number(this.state.seconds) + 1).toString()
    }
  
    if(this.state.seconds=='60')
    {
      this.state.seconds='00';
      if(Number(this.state.minute)<9){
        this.state.minute='0' + (Number(this.state.minute) + 1).toString();
      }else{
        this.state.minute=(Number(this.state.minute) + 1).toString()
      }
    }
    if(this.state.minute=='60')
    {
      this.state.minute='00';
      if(Number(this.state.hour)<9){
        this.state.hour='0' + (Number(this.state.hour) + 1).toString();
      }else{
        this.state.hour=(Number(this.state.hour) + 1).toString()
      }
    }
     this.setState({milliseconds:this.state.miliseconds})
      
     Firebase.database().ref('userid/' + User.uid).update({
      seconds: this.state.seconds,
      minute:this.state.minute,
      hour:this.state.hour,
    });
};
  





startButton = () => {
  if(this.state.watchstatus==false)
  {
    
    stopwatchAction = setInterval(() => {this.timerstatus()},1000);
    this.setState({Buttonstatus:'Stop',watchstatus:true});
    Firebase.database().ref('userid/' + User.uid).update({
      watchstatus:this.state.watchstatus
    });
  }
  else if(this.state.watchstatus==true)
  {
    clearInterval(stopwatchAction);
    this.setState({Buttonstatus:'Start',watchstatus:false});
    Firebase.database().ref('userid/' + User.uid).update({
      watchstatus:this.state.watchstatus
    });
  }
 
}



  render() {
    return(
      <View style={styles.navbar}>     
          <View  style={{display:'flex',justifyContent:'center',flexDirection:'row',}}>
              <ProgressCircle
                percent={(10*Number(this.state.seconds))/6}
                radius={110}
                borderWidth={5}
                color="rgba(22,170,157,1)"
                shadowColor="#81C7B9"
                bgColor="#fff"            
              >
                <View style={styles.StopwatchBox}>
                  <Text style={{fontSize:32}}>{this.state.hour}</Text><Text>:</Text><Text style={{fontSize:32}}>{this.state.minute}</Text><Text>:</Text><Text style={{fontSize:32}}>{this.state.seconds}</Text>
                </View>
              </ProgressCircle>
          </View>

          <View style={styles.StopwatchBoxcontrols}>
            <View  style={{margin:10}}><Button title={this.state.Buttonstatus} onPress={this.startButton}></Button></View>
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

export default Section;
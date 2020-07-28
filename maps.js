//This is an example code to get Geolocation//  
import React from 'react';
//import react in our code. 
import {View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  

export default class Maps extends React.Component {
  state = {
    currentLongitude: '77.321110',//Initial Longitude
    currentLatitude: '28.579660',//Initial Latitude
 }


 componentDidMount = () => {












  var that =this;






 









  //Checking for the permission just after component loaded
  if(Platform.OS === 'ios'){
    this.callLocation(that);
  }else{
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
            'title': 'Location Access Required',
            'message': 'This App needs to Access your location'
          }
          

        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
          .then(data => {
            that.callLocation(that);
          }).catch(err => {
          });
          //To Check, If Permission is granted
          
        } else {
          alert("Permission Denied");
        }
      } catch (err) {
        alert("err",err);
        console.warn(err)
      }
    }
    requestLocationPermission();
  }    
 }
 callLocation(that){
  //alert("callLocation Called");
  Geolocation.getCurrentPosition(
    //Will give you the current location
     (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        that.setState({ currentLongitude:currentLongitude });
        //Setting state Longitude to re re-render the Longitude Text
        that.setState({ currentLatitude:currentLatitude });
        //Setting state Latitude to re re-render the Longitude Text
        console.log(that.state.currentLongitude)
     },
     (error) => alert(error.message),
     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
  that.watchID = Geolocation.watchPosition((position) => {
    //Will give you the location on location change
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      //getting the Latitude from the location json
     that.setState({ currentLongitude:currentLongitude });
     //Setting state Longitude to re re-render the Longitude Text
     that.setState({ currentLatitude:currentLatitude });
    
     //Setting state Latitude to re re-render the Longitude Text
  });
    
 }
 componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
 }
 render() {
  return (  
    <View style={styles.MainContainer}>  

      <MapView  
        style={styles.mapStyle}  
        showsUserLocation={true}  
        zoomEnabled={true}  
        zoomControlEnabled={true}  
        region={{  
          latitude: Number(this.state.currentLatitude),   
          longitude: Number(this.state.currentLongitude),  
          latitudeDelta: 0.0922,  
          longitudeDelta: 0.0421,  
        }}

        >  

        <Marker  
          coordinate={{ latitude: Number(this.state.currentLatitude), longitude:  Number(this.state.currentLongitude)}}  
          title={"JavaTpoint"}  
          description={"Java Training Institute"}  
        />  
      </MapView>  
        
    </View>  
  );  
 }
}
  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  
import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Navbar(){
  return (
    <LinearGradient start={{x: 0, y:0}}
    end={{x: 1.3, y: 1}}
    colors={['#43cea2', '#185a9d']}>
        <View style={styles.navbar}>     
        <Text style={{fontSize:20,textAlign:'center',color:'#fff'}}>Nateo.</Text> 
        <Text style={{fontSize:12,textAlign:'center',marginBottom:2,color:'#fff'}}>Grow Together</Text>
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    navbar:{
     
        paddingTop:15,
        paddingBottom:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
       

    },

});

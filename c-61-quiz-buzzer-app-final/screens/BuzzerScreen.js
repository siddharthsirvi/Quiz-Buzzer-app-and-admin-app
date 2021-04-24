import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Button } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'

export default class BuzzerScreen extends React.Component {
  gotoHomeScreen=()=>{
    this.props.navigation.navigate('HomeScreen');
  }
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
        <TouchableOpacity style={styles.button} onPress={this.gotoHomeScreen}>
        <Text style={styles.buttonText}> HomeScreen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  button:{
    justifyContent:'center',
    alignSelf:2,
    borderWidth:2,
    borderRadius:15,
    marginTop:50,
    width:200, 
    height:50,
    backgroundColor:"pink",
  },
  buttonText:{
    textAlign:'center',
    color:'white',
      }
})

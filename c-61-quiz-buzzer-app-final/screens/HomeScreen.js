import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  constructor() {
    super();

  this.state = {
    redStatus: true,
     blueStatus: true,
   greenStatus: true,
     yellowStatus: true,
    };
  }
  goToBuzzerScreen = (buzzercolor) => {
    var teamRef = db.ref('teams/' + buzzercolor);
    teamRef.update({ enabled: false });
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  componentsDidMount() {
    var teamsref = db.ref('teams');
    teamsref.on('value', (data) => {
     var details = data.val();
     this.setState({
       redStatus: details.red.enabled,
       blueStatus: details.blue.enabled,
       greenStatus: details.green.enabled,
       yellowStatus: details.yellow.enabled,
    });
   });
 }
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          disabled={!this.state.redStatus}
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
         disabled={!this.state.greenStatus}
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.goToBuzzerScreen('green');
          }}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!this.state.blueStatus}
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled={!this.state.yellowStatus}
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

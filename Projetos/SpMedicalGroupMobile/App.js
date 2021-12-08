import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import api from './src/services/api';

export default class App extends Component {



 render(){
   return(
     <View style={styles.container}>

     <View style={styles.containerHeader}>
       <Text>{"Sp Medical Group".toUpperCase()}</Text>
     </View>

     <View style={styles.containerMain}>
       <Text>Serviços</Text>
       <NavigationContainer>
         
       </NavigationContainer>
     </View>
    </View>
   )
 }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EEF5',
  },

  containerHeader: {
    height: 58,
    width: 411,
    backgroundColor: '#698DA1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerMain: {
   justifyContent: 'center',
   alignItems: 'center'
  }
 });
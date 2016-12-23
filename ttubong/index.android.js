/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import MainView from './Component/View_list/MainView.js';
import CalrendarView from './Component/View_list/CalrendarView.js';
import SMSnavigator from './Component/View_list/SMSnavigator.js';
import DrawerTest from './Component/DrawerTest.js';


export default class Ttubong extends Component {



  render() {

    return (

      <DrawerTest />
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body:{
    flex:1,
    backgroundColor: 'black'
  },
  top: {
    flex: 0.1,
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('Ttubong', () => Ttubong);

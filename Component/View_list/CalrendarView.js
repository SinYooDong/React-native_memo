import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import TitleHeader from './../Header/TitleHeader.js';
import Calrendar_Body from './../Body/Calrendar_Body.js';
import CalendarFooter from './../Footer/CalendarFooter.js';

class CalrendarView extends Component {
  static displayName = 'CalrendarView';

  render() {
    return (
      <View style={styles.container}>
          <TitleHeader />
          <Calrendar_Body />
          <CalendarFooter />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body:{
    flex:0.8,
    backgroundColor: 'black'
  },
  top: {
    flex: 0.1,
    backgroundColor: 'white'
  }
});

export default CalrendarView;

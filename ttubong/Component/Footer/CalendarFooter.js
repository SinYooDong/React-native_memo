import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';

class CalendarFooter extends Component {
  static displayName = 'CalendarFooter';

pagemove(){
  console.log("move!!!");
  this.props.navigator.push({name: 'calrendar_Body',});
}
  render() {
    return (
      <View style={styles.top}>
        <View style={styles.collinder}>

        </View>
        <View style={styles.collinder}>
  
        </View>
        <View style={styles.collinder}>
        <TouchableOpacity
        onPress={this.pagemove.bind(this)}
        style={[styles.wideButton2]}>
        <Image source={require('../../res/plus_icon.png')} style={{width: 40, height: 40}}/>
      </TouchableOpacity>
        </View>
      </View>

      );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  collinder:{
    flex: 33.3,
    justifyContent: 'center',
		alignItems: 'center',
  },
  wideButton:{
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
  },
  wideButton2:{
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default CalendarFooter;

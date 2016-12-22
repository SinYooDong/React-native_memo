import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';
import { NativeModules } from 'react-native';
class MainFooter extends Component {
  static displayName = 'MainFooter';

pagemove(){

  //this.props.navigator.push({name: 'calrendar_Body',});
  NativeModules.CalendarActivity.startActivity('a');
}
newtonPage_move(){
  NativeModules.NewtonActivity.startActivity('a');
}
messageMove(){
  this.props.navigator.push({name: 'sMSnavigator',});

}
  render() {
    return (
      <View style={styles.top}>
        <View style={styles.collinder}>
          <TouchableOpacity
          onPress={this.pagemove.bind(this)}
          style={[styles.wideButton]}>
          <Text style={{color:'black'}}>달력</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.collinder}>
        <TouchableOpacity
        onPress={this.newtonPage_move}
        style={[styles.wideButton2]}>
        <Image source={require('../../res/mike_icon.png')} style={{width: 40, height: 40}}/>
      </TouchableOpacity>
        </View>
        <View style={styles.collinder}>
        <TouchableOpacity
        onPress={this.messageMove.bind(this)}
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

export default MainFooter;

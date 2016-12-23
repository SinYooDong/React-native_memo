import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class TitleHeader extends Component {
  static displayName = 'TitleHeader';



  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <View style={styles.top}>
        <View style={styles.title}>
          <Image source={require('../../res/x_icon.png')} style={{width: 30, height: 30,flex:0.2}}/>
          <View style={styles.title_text}>
          <Text style={{fontSize:20,color:'black'}}>경조사 달력</Text>
          </View>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 0.05,
    padding:10,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  title:{
    borderWidth:1,
    flex: 1,
    flexDirection: 'row',
  },
  title_text:{
    flex: 0.8,
		alignItems: 'center'
  }
});

export default TitleHeader;

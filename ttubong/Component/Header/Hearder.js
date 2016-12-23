import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class Hearder extends Component {
  static displayName = 'Hearder';



  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <TouchableOpacity style={styles.top} onPress={this.props.openDrawer}>
        <Image source={require('../../res/list_icon.png')} style={{width: 30, height: 25,margin:10}}/>
      </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 0.1,
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});

export default Hearder;

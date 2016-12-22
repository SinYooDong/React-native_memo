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
class MessageFooter extends Component {
  static displayName = 'MessageFooter';


sendSMSpageMove(){
  this.props.navigator.push({name: 'sMSSendPage',});

}
  render() {
    return (
      <View style={styles.bottom_btn}>
      <View style={styles.bottom_layout}>

      </View>
      <View style={styles.bottom_layout}>

      </View>
       <View style={styles.bottom_layout}>
         <TouchableOpacity
         style={styles.last_layout}
         onPress={this.sendSMSpageMove.bind(this)}
         >
         <Text>보내기
         </Text>
         </TouchableOpacity>
       </View>
      </View>

      );
  }
}

const styles = StyleSheet.create({
  bottom_btn:{
    flex:0.1,
    flexDirection: 'row',
  },
  bottom_layout:{
    flex:0.33,
    justifyContent: 'center',
		alignItems: 'center'
  },
  last_layout:{
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 1,
    }
});

export default MessageFooter;

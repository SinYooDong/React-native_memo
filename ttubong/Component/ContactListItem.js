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
class ContactListItem extends Component {
  static displayName = 'ContactListItem';

  select_item(){
    this.props.select_item(this.props.rowData)
  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={{height:40}}>
        <TouchableOpacity style={styles.top}
          onPress = {this.select_item.bind(this)}
        >
        <Text style={styles.namebox}>{this.props.rowData.name}
        </Text>
        <Text style={styles.phonbox}>{this.props.rowData.phonNumber}
        </Text>
        </TouchableOpacity>
      </View>

      );
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  namebox:{
    flex: 0.3,
  },
  phonbox:{
    flex: 0.3,
  },
  wideButton2:{
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default ContactListItem;

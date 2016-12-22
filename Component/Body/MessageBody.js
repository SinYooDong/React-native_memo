import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Contacts from 'react-native-contacts';
import { NativeModules } from 'react-native';
import ContactStore from './../../src/stores/ContactStore.js'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MessageBody extends Component {
  static displayName = 'MessageBody';




  constructor() {
      super();

    }
  getContact(){
      this.props.sendArray;
      //console.log(this.props.asd);
      this.props.navigator.push({name: 'contactList',send:this.props.sendArray});

  }
  context_list(){
      this.props.navigator.push({name: 'networkingText',});
  }

  render() {


    return (
      <View style={styles.top}>
          <View style={styles.top_text}>
            <Text style={{flex:0.9}}>수신인 목록 선택</Text>
            <TouchableOpacity
            onPress={this.getContact.bind(this)}
            style={{flex:0.1}}>
            <Image source={require('../../res/arrow_icon.png')} style={{width: 20, height: 20}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.listbox}>
          <ListView
          dataSource={ds.cloneWithRows(ContactStore._contacts)}
          renderRow={(rowData) =><Text>{rowData.name}</Text>} />
          </View>
          <View style={styles.top_text}>
            <Text style={{flex:0.9}}>메세지 문구 선택 선택</Text>
            <TouchableOpacity
            onPress={this.context_list.bind(this)}
            style={{flex:0.1}}>
            <Image source={require('../../res/arrow_icon.png')} style={{width: 20, height: 20}}/>
            </TouchableOpacity>
          </View>

          <TextInput style={styles.messagebox}/>

      </View>

      );
  }

}

const styles = StyleSheet.create({

  top: {
    flex: 0.8,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  top_text:{
    flex: 0.05,
    borderTopWidth : 1,
    flexDirection: 'row',
    justifyContent: 'center',
		alignItems: 'center'
  },
  listbox:{
    flex:0.2,
    borderWidth:1,
    marginBottom: 10
  },
  messagebox:{
    borderWidth:1,
    flex:0.4,
    marginTop: 10
  }
});

export default MessageBody;

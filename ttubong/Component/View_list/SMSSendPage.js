import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  InteractionManager
} from 'react-native';
import ContactListItem from './../ContactListItem.js';
import ContactStore from './../../src/stores/ContactStore.js'
var SmsAndroid = require('react-native-sms-android');


const add_list = [];

class SMSSendPage extends Component {
  static displayName = 'SMSSendPage';

  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      list:ds.cloneWithRows(ContactStore._contacts)

    };
      //this.setState({renderPlaceholderOnly: false, list:ds.cloneWithRows(ContactStore._contacts)});
  }

  render() {
    for(var i =0; i < ContactStore._contacts.length; i++){
      console.log(ContactStore._contacts[i].name);
        this.test(ContactStore._contacts[i].phonNumber);
    }
   if (this.state.renderPlaceholderOnly) {
     return this._renderPlaceholderView();
   }

   return (
     <View style={styles.top}>

       <ListView
         style={styles.list}
         dataSource={this.state.list}
         renderRow={(rowData) =><ContactListItem rowData={rowData} select_item={this.select_item}/>}
       />
       <TouchableOpacity
       onPress={this.test('01033813196')}
       >
       <Text>테스트
       </Text>
       </TouchableOpacity>
     </View>
   );
 }

  _renderPlaceholderView() {
    return (
      <View style={styles.top}>
        <Text>Loading...</Text>
      </View>
    );
  }


  select_item(row){
    add_list.push(row)
  }

  sendList(){
    //console.log("보내기전. "+add_list.length);
    //this.props.sendArray(add_list)
    for(var i =0; i < add_list.length; i++){
      ContactStore.createContact(add_list[i].id,add_list[i].name,add_list[i].phonNumber);
    }
    //this.props.navigator.
    add_list = [];
    this.props.navigator.push({name: 'messageView',});
  }
  test(phone){
    SmsAndroid.sms(
  phone, // phone number to send sms to
  '문자봤으면 카톡점.', // sms body
  'sendDirect', // sendDirect or sendIndirect
  (err, message) => {
    if (err){
      console.log("error");
    } else {
      console.log(message); // callback message
    }
  }
);
  }
}

const styles = StyleSheet.create({

  top: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  list:{
    flex:0.9,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
  },
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

export default SMSSendPage;

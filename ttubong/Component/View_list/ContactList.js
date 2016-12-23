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
import { NativeModules } from 'react-native';
import ContactListItem from './../ContactListItem.js';
import ContactStore from './../../src/stores/ContactStore.js'

const add_list = [];

class ContactList extends Component {
  static displayName = 'ContactList';

  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      renderPlaceholderOnly: true,
      list:ds,
      input_list:[]

  };

  NativeModules.ContactModule.test((msg)=>{console.log(msg);},(x) => {
    InteractionManager.runAfterInteractions(() => {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({renderPlaceholderOnly: false, list:ds.cloneWithRows(JSON.parse(x))});
    });

  });
  }

  render() {
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
       <View style={styles.bottom_btn}>
       <View style={styles.bottom_layout}>

       </View>
       <View style={styles.bottom_layout}>

       </View>
        <View style={styles.bottom_layout}>
          <TouchableOpacity
          style={styles.last_layout}
          onPress={this.sendList.bind(this)}
          >
          <Text>선택
          </Text>
          </TouchableOpacity>
        </View>
       </View>
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

export default ContactList;

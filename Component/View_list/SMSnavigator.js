import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Navigator
} from 'react-native';

import Reflux from 'reflux'
import {ContactActions} from './../../src/action.js'
//import ContactStore from './../../src/stores/ContactStore.js'

import MessageView from './MesaageView.js';
import ContactList from './ContactList.js';
import SMSSendPage from './SMSSendPage.js';
//asdasdsad


import NetworkingText from './NetworkingText.js';

const add_list = [];

class SNSnatigator extends Component {
  static displayName = 'SNSnatigator';

  constructor() {
      super();
      this.state = {
        sms_list:'',
      }

    }


  _renderScene(route,sms_navigator,sendArra) {
    //Alert.alert('Button has been pressed!');
    //navigator.push({name: 'view2'});
      //this.setState({
        //     header: navigator
        // });

      switch (route.name) {
        case 'messageView':
        //console.log(ContactStore._contacts);
          return <MessageView navigator={sms_navigator} />
        case 'contactList':
          return <ContactList navigator={sms_navigator} />
        case 'sMSSendPage':
          return <SMSSendPage navigator={sms_navigator} />
        case 'networkingText':
          return <NetworkingText navigator={sms_navigator} />
      default:
        console.error('Encountered unexpected route: ' + route.name);
      }

      return <MainView />;
    }

  render() {
    //console.log(ContactStore._contacts);
   return (
     <View style={styles.top}>
       <Navigator
         ref='ms_navigator'
         initialRoute={{name: 'messageView',send:this.sendArray()}}
         renderScene={this._renderScene}/>
     </View>
   );
 }
 sendArray(){
   //this.state.sms_list = list;
   console.log("표시점......................");
 }


}

const styles = StyleSheet.create({

  top: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  }
});

export default SNSnatigator;

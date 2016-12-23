import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  Text,
  BackAndroid,
  Navigator,
  TouchableOpacity
} from 'react-native';

import MainView from './View_list/MainView.js';
import CalrendarView from './View_list/CalrendarView.js';
import SMSnavigator from './View_list/SMSnavigator.js';
import Hearder from './Header/Hearder.js';
import { NativeModules } from 'react-native';


class DrawerTest extends Component {
  static displayName = 'DrawerTest';

  constructor() {
  super();
  this.openDrawer = this.openDrawer.bind(this);
}

openDrawer() {

  this.drawer.openDrawer();
}
_renderScene(route,navigator) {
  //Alert.alert('Button has been pressed!');
  //navigator.push({name: 'view2'});
    //this.setState({
      //     header: navigator
      // });

    switch (route.name) {
    case 'mainview':
      return <MainView navigator={navigator}/>;
    case 'calrendar_Body':
      return <CalrendarView navigator={navigator}/>;
    case 'sMSnavigator':
      return <SMSnavigator navigator={navigator}/>

    default:
      console.error('Encountered unexpected route: ' + route.name);
    }

    return <MainView />;
  }
  componentDidMount() {
        //the '.bind(this)' makes sure 'this' refers to 'ViewComponent'
        BackAndroid.addEventListener('hardwareBackPress', function() {
          if (this.refs.navigator && this.refs.navigator.getCurrentRoutes().length > 1) {
                  this.refs.navigator.pop();
                  return true;
              }
              return false;
        }.bind(this));
    }
goCal(){
  NativeModules.CalendarActivity.startActivity('a');
}

goNewton(){
  NativeModules.NewtonActivity.startActivity('a');
}

goSMS(){
  this.refs.navigator.push({name: 'sMSnavigator',});
  this.drawer.closeDrawer();
}

render() {
  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff',flexDirection:'column'}}>
      <TouchableOpacity
        style ={{flex: 0.3}}
        onPress={this.goCal}
      >
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>달력</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style ={{flex: 0.3}}
      onPress={this.goNewton}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>음성</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style ={{flex: 0.3}}
      onPress={this.goSMS.bind(this)}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>플러스</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      ref={(_drawer) => this.drawer = _drawer}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <Hearder openDrawer={this.openDrawer} />
        <Navigator
          style={styles.body}
          ref='navigator'
          initialRoute={{name: 'mainview'}}
          renderScene={this._renderScene}/>
      </View>
    </DrawerLayoutAndroid>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body:{
    flex:0.8,
    backgroundColor: 'black'
  },
  top: {
    flex: 0.1,
    backgroundColor: 'white'
  }
});

export default DrawerTest;

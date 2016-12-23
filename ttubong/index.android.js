/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import MainView from './Component/View_list/MainView.js';
import CalrendarView from './Component/View_list/CalrendarView.js';
import SMSnavigator from './Component/View_list/SMSnavigator.js';
import DrawerTest from './Component/DrawerTest.js';


export default class Ttubong extends Component {


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



  render() {

    return (
      /*<View style={styles.container}>
        <Navigator
          style={styles.body}
          ref='navigator'
          initialRoute={{name: 'mainview'}}
          renderScene={this._renderScene}/>
      </View>*/
      <DrawerTest />
    );
  }

  /*componentDidMount() {
        //the '.bind(this)' makes sure 'this' refers to 'ViewComponent'
        BackAndroid.addEventListener('hardwareBackPress', function() {
          if (this.refs.navigator && this.refs.navigator.getCurrentRoutes().length > 1) {
                  this.refs.navigator.pop();
                  return true;
              }
              return false;
        }.bind(this));
    }
    constructor(props){
    super(props);

    console.log(props.navigator) // <- this will print in console if you are passing a navigator object.
  }*/

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body:{
    flex:1,
    backgroundColor: 'black'
  },
  top: {
    flex: 0.1,
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('Ttubong', () => Ttubong);

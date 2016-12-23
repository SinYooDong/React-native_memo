/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  DrawerLayoutAndroid,
  TouchableOpacity
} from 'react-native';
import BasicAnime from './Class/BasicAnime.js';
import LayoutAnimation from './Class/LayoutAnime.js';
import ReboundAnime from './Class/ReboundAnime.js';


export default class animations_test extends Component {

  constructor() {
  super();
    this.openD = this.openD.bind(this);
  }

  _renderScene(route,navigator) {
   //Alert.alert('Button has been pressed!');
   //navigator.push({name: 'view2'});
     //this.setState({
       //     header: navigator
       // });
     switch (route.name) {
     case 'basicAnime':
       return <BasicAnime navigator={navigator}/>;
       //return <View><Text>aaaaaa</Text></View>;
     case 'layoutAnimation':
       //return <BasicAnime navigator={navigator}/>;
      return <LayoutAnimation navigator={navigator} />
      case 'reboundAnime':
        //return <BasicAnime navigator={navigator}/>;
       return <ReboundAnime navigator={navigator} />
     default:
       console.error('Encountered unexpected route: ' + route.name);
     }

     return <BasicAnime />;
   }


   openD(){
     this.drawer.openDrawer();
   }
   goBasic(){
     this.refs.navigator.push({name: 'basicAnime',});
     this.drawer.closeDrawer();
   }
   goLayAnime(){
     this.refs.navigator.push({name: 'layoutAnimation',});
     this.drawer.closeDrawer();
   }
   goReboundAnime(){
     this.refs.navigator.push({name: 'reboundAnime',});
     this.drawer.closeDrawer();
   }

  render() {
    var navigationView = (
   <View style={{flex: 1, backgroundColor: '#fff',flexDirection:'column'}}>
         <TouchableOpacity
          style ={{flex: 0.1}}
          onPress={this.goBasic.bind(this)}
        >
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>기본</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style ={{flex: 0.1}}
         onPress={this.goLayAnime.bind(this)}
       >
         <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>레이아웃 애니메이션</Text>
       </TouchableOpacity>
       <TouchableOpacity
        style ={{flex: 0.1}}
        onPress={this.goReboundAnime.bind(this)}
      >
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>리바운드 애니메이션</Text>
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
          <View style={styles.tooldar}>
            <TouchableOpacity
              onPress={this.openD}
            >
            <Text>드로우열기
            </Text>
            </TouchableOpacity>
            </View>
          <View style={styles.bodya}>
          <Navigator
          style={styles.bodya}
          ref='navigator'
          initialRoute={{name: 'basicAnime'}}
          renderScene={this._renderScene}/>
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  tooldar:{
    flex:0.05,
  },
  bodya:{
    flex:0.95,
  },
});

AppRegistry.registerComponent('animations_test', () => animations_test);

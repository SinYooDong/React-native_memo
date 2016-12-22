import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Hearder from './../Header/Hearder.js';
import MainBody from './../Body/MainBody.js';
import MainFooter from './../Footer/MainFooter.js';


class MainView extends Component {
  static displayName = 'MainView';

  render() {
    return (
      <View style={styles.container}>
        
          <MainBody />
          <MainFooter navigator={this.props.navigator}/>
      </View>
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

export default MainView;

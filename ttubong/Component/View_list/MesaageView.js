import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import TitleHeader from './../Header/TitleHeader.js';
import MessageBody from './../Body/MessageBody.js';
import MessageFooter from './../Footer/MessageFooter.js';


class MessageView extends Component {
  static displayName = 'MessageView';

  render() {

    return (
      <View style={styles.container}>
          <TitleHeader />
          <MessageBody navigator={this.props.navigator} sendArray={this.props.sendArray}/>
          <MessageFooter navigator={this.props.navigator} sendArray={this.props.sendArray}/>
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

export default MessageView;

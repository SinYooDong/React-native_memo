import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import TitleHeader from './../Header/TitleHeader.js';
import MessageBody from './../Body/MessageBody.js';
import MessageFooter from './../Footer/MessageFooter.js';


class NetworkingText extends Component {
  static displayName = 'NetworkingText';

  render() {

    return (
      <View style={styles.container}>
          <TouchableOpacity
          onPress={this.apitext}
          style={styles.body}>
          <Text>API테스트
          </Text>
          </TouchableOpacity>
      </View>
      );
  }

  apitext(){
      /*fetch('http://220.117.166.61:5000/comment_list/1/0', {
          method: 'GET',

        }).then((response) => response.json())
.then((responseData) => {
  console.log(responseData);
})
.done();*/

var data = new FormData()
data.append('text', '테스트')
data.append('text_id', '1')

fetch('http://220.117.166.61:5000/comment_add', {
method: 'POST',
body: data
}).then((response) => response.json())
.then((responseData) => {
console.log(responseData);
})
.done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body:{
    flex:0.8,
    backgroundColor: 'white'
  },
  top: {
    flex: 0.1,
    backgroundColor: 'white'
  }
});

export default NetworkingText;

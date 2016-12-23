import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

class LayoutAnime extends React.Component {
  constructor(props) {
    super(props);
    //초기설정.
    this.state = { w: 100, h: 100 };
    this._onPress = this._onPress.bind(this);
    this._onPressDown = this._onPressDown.bind(this);
  }

  componentWillMount() {
    // Animate creation
    LayoutAnimation.spring();
  }

  _onPress() {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15}) //각각 15씩 증가!
  }
  _onPressDown() {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w - 15, h: this.state.h - 15}) //각각 15씩 증가!
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>커져라!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressDown}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>작아져라!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    backgroundColor:'red'
  },
  buttonText:{
    justifyContent: 'center',
    alignItems: 'center',
    color:'white'
  },
  button: {
    backgroundColor:'black',
    width:100,
    height:50
  },
});

export default LayoutAnime;

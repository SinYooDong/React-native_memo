import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native'

class ParallelText extends Component {

  componentWillMount() {
      this.animatedValue1 = new Animated.Value(0);
      this.animatedValue2 = new Animated.Value(1);
      this.animatedValue3 = new Animated.Value(1);
    }

    componentDidMount() {
      Animated.parallel([
        Animated.timing(this.animatedValue1, {
          toValue: 100,
          duration: 300
        }),

        Animated.spring(this.animatedValue3,{
          toValue: 200,
          duration: 300
        }),
      Animated.spring( this.animatedValue2, {
        toValue: 200,
        duration: 300,
        friction: 2
      })
      ]).start();
    }




    render() {
      const animatedStyles = {
        transform: [
          {translateY: this.animatedValue1},
          {translateX: this.animatedValue3}
        ]
      }
      return (
        <View style={styles.container}>
          <Animated.View style={[styles.box, animatedStyles,{marginTop:this.animatedValue2}]} />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    box: {
      backgroundColor: '#333',
      height: 100,
      width: 100,
    },
  });
export default ParallelText;

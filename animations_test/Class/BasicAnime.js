import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

class animations_test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0), //초기화.
    };
  }

  render() {
    return (
      <Animated.Image                         // 베이스는 Image, Text, View가 있다. 추가적으로 다른 컴포넌트도 나오지만 테스트는 아직 안해봄.
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [                        // `transform` 은 여러가지 속성을 배열 형태로 지정해줄수 있습니다. 자세한 사항은 --> https://facebook.github.io/react-native/docs/transforms.html
            {scale: this.state.bounceValue},  // 위에서 설정한 값으로 지정.
          ]
        }}
      />
    );
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // 처음 값은 다음과 1.5으로.
    Animated.spring(                          // 기본적인 함수로는 spring, decay, timing 이 있다.[]
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.4,                         // 바뀔 사이즈.
        friction: 1,                          // 튕기는 정도...
      }
    ).start();                                // 반드시 start는 해줘야 실행됨.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default animations_test;
//AppRegistry.registerComponent('animations_test', () => animations_test);

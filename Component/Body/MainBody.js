import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';

class MainBody extends Component {
  static displayName = 'MainBody';

  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑']),
      };
    }


  render() {
    return (
      <View style={styles.top}>
        <View style={styles.title}>
            <Text style={{fontSize: 30,color:'black'}}>경조사 뚜봉이</Text>
        </View>
        <View style={styles.list}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
      </View>

      );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 0.4,
    justifyContent: 'center',
		alignItems: 'center',

  },
  list: {
    flex: 0.4,
    padding:20,
  },
  top: {
    flex: 0.8,
    backgroundColor: 'white',
  }
});

export default MainBody;

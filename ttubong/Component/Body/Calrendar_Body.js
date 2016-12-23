import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView
} from 'react-native';
import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const customMonthNames = ['1월', '2월', '3월', '4월', '5월',
  '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

class Calrendar_Body extends Component {
  static displayName = 'Calrendar_Body';

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
        <Calendar
          showControls
          prevButtonText={'이전달'}
          nextButtonText={'다음달'}
          eventDates={['2016-12-19', '2016-12-01', '2016-12-22', '2016-12-25']}
          events={[{date: '2016-12-25', hasEventCircle: {backgroundColor: 'powderblue'}}]}
          titleFormat={'MMMM YYYY'}
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          customStyle={{controlButtonText: {color: 'blue'},weekendHeading: {color: 'blue'},}} />
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

export default Calrendar_Body;

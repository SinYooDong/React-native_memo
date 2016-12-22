import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';
import Calendar from 'react-native-calendar';
import MainView from './Component/View_list/MainView.js';
import CalrendarView from './Component/View_list/CalrendarView.js';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


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
      default:
        console.error('Encountered unexpected route: ' + route.name);
      }

      return <MainView />;
    }

    constructor(props) {
        super(props);
        this.state = {
          selectedDate: moment().format(),
        };
      }


  render() {
    return (
      <View style={styles.container}>
       <Calendar
         ref="calendar"
         eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
         events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
         scrollEnabled
         showControls
         dayHeadings={customDayHeadings}
         monthNames={customMonthNames}
         titleFormat={'MMMM YYYY'}
         prevButtonText={'Prev'}
         nextButtonText={'Next'}
         onDateSelect={(date) => this.setState({ selectedDate: date })}
         onTouchPrev={() => console.log('Back TOUCH')}     // eslint-disable-line no-console
         onTouchNext={() => console.log('Forward TOUCH')}  // eslint-disable-line no-console
         onSwipePrev={() => console.log('Back SWIPE')}     // eslint-disable-line no-console
         onSwipeNext={() => console.log('Forward SWIPE')}  // eslint-disable-line no-console
       />
       <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
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

AppRegistry.registerComponent('Ttubong', () => Ttubong);
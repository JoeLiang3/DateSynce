import React, { Component, Proptypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data'; // To use react meteor data


import Calendar from '../components/generate_date.js'; // Date Generate button
import FreeDays from '../components/test.jsx'; // Date Generate button

import { MCalendar } from '../api/availableDates.js';





// App component - represents the whole app
class Date extends Component {

  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);

    //Setting up all days as free dates
    var Calendar = new Array(32);
    for(var i=0; i<32; i++) {
      Calendar[i] = i;
    }
    this.state = {
      Calendar: this.props.calendar,
    };
    console.log(this.props.calendars);
  }


  update() {
    var item = this.renderCal();
    this.setState({Calendar: item[0]});
  }
  renderCal() {
    return this.props.calendars.map((cal) => (
      cal.array
    ));
  }


  remove(date) {
    var tempCalendar = this.state.Calendar;
    console.log(date);
    tempCalendar[date] = 0;
    this.setState({Calendar: tempCalendar});

    MCalendar.update("23D6HgwiQ2NKWRZPq", {
      $set: { array: tempCalendar },
    });
  }

  render() {

    var date = new Date();
    var d= new Date(date.getFullYear(), date.getMonth()+1, 0);
    var availDates = new Array(32);

    return (

      <Calendar remove = {this.remove} update = {this.update}/>
      
    );
  }
}
export default Date;
// App.propTypes = {
//   calendars: PropTypes.array.isRequired,
// };

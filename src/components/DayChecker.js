import React, { Component } from 'react';

const moment = require('moment');
const _ = require('underscore');

const days = moment.weekdays();
const months = moment.months();
const today = new Date().getDay();
const currentYear = new Date().getFullYear();

class DayChecker extends Component {
  
  getDayName(number) {
    return days[number];
  }

  getDaysInMonth = function(month,year) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  };

  generateCalendar(year) {
    return months.slice().map( month => {
      return  { 
        name: month,
        days: _.range(1, moment(`${year}-${moment().month(month).format('MM')}`, "YYYY-MM").daysInMonth()  + 1)
      };
    })
  }
 
  render() {
    let calendarLikeArray = this.generateCalendar(currentYear);

    // If it is weekday
    if (today === 6 || today === 0)
      return <div>Today is {this.getDayName(today)} - You can watch TV all day today</div>;

    // If it is weeken
    return <div>Today is {this.getDayName(today)} - You should go to work today</div>;
  }

}

export default DayChecker;

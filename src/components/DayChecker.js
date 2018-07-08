import React, { Component } from 'react';
import WeekDay from './WeekDay';

const moment = require('moment');

class DayChecker extends Component {
  render() {
    return <div>Today is {moment().format('dddd')} <WeekDay /></div>;
  }
}

export default DayChecker;

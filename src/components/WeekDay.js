import React, { Component } from 'react';
import C from '../data/Constants'; 

const moment = require('moment');

class WeekDay extends Component {

  render() {
    if (moment().day() === 0 || moment().day() === 6)
      return <div>{C.NOTWORK}</div>;

    return <div>{C.WORK}</div>;
  }
}

export default WeekDay;

import React, { Component } from 'react';

const moment = require('moment');

class MonthChecker extends Component {
  render() {
    return <div>We are in {moment().format('MMMM')}</div>
  }
}

export default MonthChecker;

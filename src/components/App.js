import React, { Component } from 'react';
import Header from './Header';
import DayChecker from './DayChecker';
import MonthChecker from './MonthChecker';

class App extends Component {
  render() {
    return [
        <Header />,
        <DayChecker />,
        <MonthChecker />
    ];
  }
}

export default App;

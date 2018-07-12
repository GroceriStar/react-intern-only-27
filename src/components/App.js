import React, { Component } from 'react';
import Header from './Header';
import DayChecker from './DayChecker';
import MonthChecker from './MonthChecker';
import MealPlan from './MealPlan';

class App extends Component {
  render() {
    return [
        <Header />,
        <DayChecker />,
        <MonthChecker />,
        <MealPlan />
    ];
  }
}

export default App;

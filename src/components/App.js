import React, { Component } from 'react';

import Header from './Header';
import DayChecker from './DayChecker';

class App extends Component {
  render() {
    return [
        <Header />,
        <DayChecker />
    ];
  }
}

export default App;

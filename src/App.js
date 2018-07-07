import React, { Component } from 'react';
const _ = require('underscore');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
  "October", "November", "December"];
// Get current date info
const today = new Date().getDay();
const currentYear = new Date().getFullYear();


class App extends Component {
  
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
        days: _.range(1, this.getDaysInMonth(months.indexOf(month), year) + 1)
      };
    })
  }
 
  render() {
    
    let calendarLikeArray = this.generateCalendar(currentYear);
    console.log(calendarLikeArray)

    // If it is weekday
    if (today === 6 || today === 0)
      return (
        
        <div>
          <div>Today is {this.getDayName(today)} - You can watch TV all day today</div>
        </div>
      )

    // If it is weeken
    return <div>Today is {this.getDayName(today)} - You should go to work today</div>;
  }

}

export default App;

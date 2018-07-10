const moment = require('moment');
const _ = require('underscore');

const ArrayCalendarLike = (year) => 
  moment.months().slice().map(month => {
    return {
      name: month,
      days: _.range(1, moment(`${year}-${moment().month(month).format('MM')}`, "YYYY-MM").daysInMonth() + 1)
    };
  })

export default ArrayCalendarLike;

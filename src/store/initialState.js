import moment from 'moment';

export default {
  selectedDate: moment(),
  events: [],
  groupedEvents: {
    isLoaded: false,
    hours: [],
    expenses: [],
    additionalHours: []
  }
};

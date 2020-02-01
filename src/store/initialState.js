import moment from 'moment';

export default {
    selectedDate: moment(),
    events: {
        isLoaded: false,
        hours: [],
        expenses: [],
        additionalHours: []
    }
};
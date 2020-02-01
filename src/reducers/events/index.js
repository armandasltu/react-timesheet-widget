import { Record } from 'immutable';
import moment from 'moment';

export const HourEvent = Record({
    date: null,
    eventType: null,
    firstTaskStart: null,
    lastTaskEnd: null
});

export const ExpenseEvent = Record({
    date: null,
    eventType: null,
    quantity: null,
    price: null
});

export const addEventsByDate = (state, { payload: { events } }) => {
    const selectedDate = moment(state.selectedDate).format('YYYYMMDD');
    const hours = events.filter((e) => e.isHoursEventType && moment(e.date).format('YYYYMMDD') === selectedDate).map((event) => new HourEvent(event));
    const expenses = events.filter((e) => e.isExpenseType && moment(e.date).format('YYYYMMDD') === selectedDate).map((event) => new ExpenseEvent(event));
    const additionalHours = events.filter((e) => e.isAdditionalHoursEventType && moment(e.date).format('YYYYMMDD') === selectedDate).map((event) => new HourEvent(event));

    return { ...state, events: { isLoaded: true, hours, expenses, additionalHours } };
};

export const setSelectedDate = (state, { payload: { selectedDate } }) => (
    { ...state, selectedDate }
);
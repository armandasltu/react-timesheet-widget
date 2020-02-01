import { Record } from 'immutable';

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

export const addEvents = (state, { payload: { events } }) => {
    const hours = events.filter((event) => event.isHoursEventType).map((event) => new HourEvent(event));
    const expenses = events.filter((event) => event.isExpenseType).map((event) => new ExpenseEvent(event));
    const additionalHours = events.filter((event) => event.isAdditionalHoursEventType).map((event) => new HourEvent(event));

    return { ...state, events: { isLoaded: true, hours, expenses, additionalHours } };
};

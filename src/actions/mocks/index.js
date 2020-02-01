import moment from 'moment';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const events = [
    {
        date: moment().subtract(2, 'days').unix(),
        quantity: 3,
        price: 2.45,
        eventType: 'Expense type 1',
        isExpenseType: true,
        isHoursEventType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: true,
        isApproved: true,
        isRejected: false,
        tasksCount: null,
        firstTaskStart: null,
        lastTaskEnd: null
    },
    {
        date: moment().subtract(2, 'days').unix(),
        quantity: 1,
        price: 1.23,
        eventType: 'Expense type 2',
        isExpenseType: true,
        isHoursEventType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: true,
        isApproved: true,
        isRejected: false,
        tasksCount: null,
        firstTaskStart: null,
        lastTaskEnd: null
    },
    {
        date: moment().subtract(4, 'days').unix(),
        quantity: null,
        price: null,
        eventType: 'Hours type 1',
        isExpenseType: false,
        isHoursEventType: true,
        isAdditionalHoursEventType: false,
        isWorkHour: true,
        isApproved: true,
        isRejected: false,
        tasksCount: null,
        firstTaskStart: moment().subtract(4, 'days').subtract(2, 'hours').subtract(22, 'minutes').unix(),
        lastTaskEnd: moment().subtract(4, 'days').unix()
    },
    {
        date: moment().subtract(1, 'days').unix(),
        quantity: null,
        price: null,
        eventType: 'Hours type 2',
        isExpenseType: false,
        isHoursEventType: true,
        isAdditionalHoursEventType: false,
        isWorkHour: true,
        isApproved: true,
        isRejected: false,
        tasksCount: null,
        firstTaskStart: moment().subtract(1, 'days').subtract(6, 'hours').unix(),
        lastTaskEnd: moment().subtract(1, 'days').unix()
    },
    {
        date: moment().unix(),
        quantity: null,
        price: null,
        eventType: 'Additional hours type 1',
        isExpenseType: false,
        isHoursEventType: false,
        isAdditionalHoursEventType: true,
        isWorkHour: true,
        isApproved: true,
        isRejected: false,
        tasksCount: 2,
        firstTaskStart: moment().subtract(3, 'hours').unix(),
        lastTaskEnd: moment().unix()
    }
];

const mock = new MockAdapter(axios);

mock.onGet('/events').reply(200, {
    events
});
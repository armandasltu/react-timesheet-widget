import moment from 'moment';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const getRandomNumber = (from, to) => Math.floor(Math.random() * to) + from;

const generateEvents = (count = 50) => {
  const result = [];
  const availableTypes = ['hours', 'expense', 'additionalHours'];
  for (let i = 0; i < count; i++) {
    const type = availableTypes[getRandomNumber(0, 3)];
    const day = getRandomNumber(0, 7);
    const date = moment().subtract(getRandomNumber(0, 7), 'days');
    const firstTaskStart = moment()
      .subtract(day, 'days')
      .subtract(getRandomNumber(7, 11), 'hours')
      .subtract(getRandomNumber(0, 60), 'minutes')
      .toDate();
    const lastTaskEnd = moment()
      .subtract(day, 'days')
      .subtract(getRandomNumber(1, 6), 'hours')
      .subtract(getRandomNumber(0, 60), 'minutes')
      .toDate();
    const quantity = getRandomNumber(1, 10);
    const price = getRandomNumber(0, 10) + '.' + getRandomNumber(0, 99);
    const eventType = type.toUpperCase() + ' ' + getRandomNumber(1, 20);

    result.push({
      date,
      quantity,
      price,
      eventType,
      isExpenseType: type === 'expense',
      isHoursEventType: type === 'hours',
      isAdditionalHoursEventType: type === 'additionalHours',
      isWorkHour: true,
      isApproved: true,
      isRejected: false,
      tasksCount: null,
      firstTaskStart: type !== 'expense' ? firstTaskStart : null,
      lastTaskEnd: type !== 'expense' ? lastTaskEnd : null
    });
  }

  return result;
};

const mock = new MockAdapter(axios);

mock.onGet('/events').reply(200, {
  events: generateEvents()
});

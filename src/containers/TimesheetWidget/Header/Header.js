import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useStore } from '../../../store';
import { setSelectedDate } from '../../../actions';
import CalendarList from '../../../components/CalendarList';

function Header() {
  const [{ events, selectedDate }, dispatch] = useStore();
  const calendarLabel = moment().format('MMMM YYYY');

  // @TODO: needs performance improvements and move to actions
  const getWorkedHours = date => {
    if (events.length) {
      const currentDay = date.format('YYYYDD');
      const currentEvents = events.filter(
        event => event.isHoursEventType && moment(event.date).format('YYYYDD') === currentDay
      );
      let durationSum = 0;
      currentEvents.map(({ firstTaskStart, lastTaskEnd }) => {
        const startDate = moment(firstTaskStart);
        const endDate = moment(lastTaskEnd);
        const duration = moment.duration(endDate.diff(startDate)).asMilliseconds();
        durationSum += duration;
      });

      return moment.utc(durationSum).format('H:mm');
    }

    return '-';
  };

  const getDays = () => {
    const days = [];
    const dateStart = moment().subtract(6, 'days');
    for (let i = 0; i <= 6; i++) {
      days.push({
        date: dateStart.toDate(),
        hours: getWorkedHours(dateStart),
        onClick: item => {
          setSelectedDate(dispatch, item);
        }
      });
      dateStart.add(1, 'days');
    }
    return days;
  };

  const daysList = getDays();
  const TodayCalendar = styled.div`
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `;

  return (
    <div className="timesheet-widget--header">
      <b>
        {calendarLabel}
        <TodayCalendar onClick={() => setSelectedDate(dispatch, moment().toDate())}>
          <CalendarTodayIcon />
        </TodayCalendar>
      </b>
      <CalendarList selected={selectedDate} list={daysList} />
    </div>
  );
}

export default Header;

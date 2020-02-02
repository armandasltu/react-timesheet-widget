import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { List, Item, DayTitle, Day, Hours } from './styles';

const CalendarList = props => {
  const { list, selected } = props;

  if (!list) {
    return null;
  }

  return (
    <List>
      {list.map(({ date, hours, onClick }, key) => {
        const selectedDay = moment(selected).format('D');
        const itemDay = moment(date).format('D');
        const isActive = selectedDay === itemDay;
        const isCurrentDay = itemDay === moment().format('D');

        return (
          <Item key={key} onClick={() => onClick(date)}>
            <DayTitle>{moment(date).format('ddd')}</DayTitle>
            <Day active={isActive} current={isCurrentDay}>
              {moment(date).format('D')}
            </Day>
            <Hours>{hours}</Hours>
          </Item>
        );
      })}
    </List>
  );
};

CalendarList.defaultProps = {
  list: []
};

CalendarList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default CalendarList;

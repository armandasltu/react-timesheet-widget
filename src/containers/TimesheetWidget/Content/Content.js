import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import Expenses from './Expenses';
import Hours from './Hours';

function Content(props) {
  const {
    events: { hours, expenses, additionalHours },
    selectedDate
  } = props;

  const ScrollableContainer = styled.div`
    margin-top: 1rem;
    height: 200px;
    overflow: auto;
  `;
  const NoData = styled.div`
    margin-top: 2rem;
    text-align: center;
    height: 200px;
  `;
  const selectedDateLabel = moment(selectedDate).format('dddd DD.MM.YYYY');

  return (
    <div className="timesheet-widget--content">
      {selectedDateLabel}
      {hours.length || expenses.length || additionalHours.length ? (
        <ScrollableContainer>
          <Hours title="Hours" data={hours} icon={<AccessTimeIcon />} />
          <Expenses title="Expenses" data={expenses} />
          <Hours title="Additional hours" data={additionalHours} icon={<AvTimerIcon />} />
        </ScrollableContainer>
      ) : (
        <NoData>No events for today.</NoData>
      )}
    </div>
  );
}

Content.defaultProps = {
  hours: [],
  expenses: [],
  additionalHours: []
};

Content.propTypes = {
  events: PropTypes.oneOfType([PropTypes.object]).isRequired,
  hours: PropTypes.arrayOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.object),
  additionalHours: PropTypes.arrayOf(PropTypes.object),
  selectedDate: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default Content;

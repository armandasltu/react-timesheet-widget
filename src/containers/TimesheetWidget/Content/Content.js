import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AvTimerIcon from '@material-ui/icons/AvTimer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ListItem(props) {
  const { icon, title, children } = props;

  const Heading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    background-color: #ebebeb;
    span {
      margin-left: 0.5rem;
    }
  `;
  const Content = styled.div`
    padding: 1rem 0.5rem;
  `;

  return (
    <div>
      <Heading>
        {icon}
        <span>{title}</span>
      </Heading>
      <Content>{children}</Content>
    </div>
  );
}

function Expenses(props) {
  const { title, data } = props;

  if (!data.length) {
    return null;
  }

  return (
    <ListItem icon={<AttachMoneyIcon />} title={title}>
      <Table size="small" aria-label={title}>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ eventType, quantity, price }, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {eventType}
              </TableCell>
              <TableCell align="right">{quantity}</TableCell>
              <TableCell align="right">{(quantity * price).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ListItem>
  );
}

function Hours(props) {
  const { title, data, icon } = props;

  if (!data.length) {
    return null;
  }

  return (
    <ListItem icon={icon} title={title}>
      <Table size="small" aria-label={title}>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ eventType, firstTaskStart, lastTaskEnd }, key) => {
            const startDate = moment(firstTaskStart);
            const endDate = moment(lastTaskEnd);
            const duration = moment.duration(endDate.diff(startDate)).asMilliseconds();
            const hours = moment.utc(duration).format('H:mm');

            return (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {eventType}
                </TableCell>
                <TableCell align="right">{hours}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ListItem>
  );
}

function Content(props) {
  const {
    events: { hours, expenses, additionalHours },
    selectedDate
  } = props;

  const selectedDateLabel = moment(selectedDate).format('dddd DD.MM.YYYY');
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

export default Content;

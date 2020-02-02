import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from '../ListItem';

function Hours(props) {
  const { title, data, icon, isHoursType } = props;

  if (!data.length) {
    return null;
  }

  const getEventsData = () => {
    let firstTask = '';
    let lastTask = '';

    const eventsList = data.map(({ eventType, firstTaskStart, lastTaskEnd }, key) => {
      const startDate = moment(firstTaskStart);
      const endDate = moment(lastTaskEnd);
      const duration = moment.duration(endDate.diff(startDate));
      const hours = isHoursType
        ? moment.utc(duration.asMilliseconds()).format('H:mm')
        : duration.asHours().toFixed(2);
      if (key === 0) {
        firstTask = startDate.format('HH:mm');
      }
      if (key === data.length - 1) {
        lastTask = endDate.format('HH:mm');
      }
      return (
        <TableRow key={key}>
          <TableCell component="th" scope="row">
            {eventType}
          </TableCell>
          <TableCell align="right">{hours}</TableCell>
        </TableRow>
      );
    });

    return { eventsList, heading: `(${firstTask} - ${lastTask})` };
  };

  const { eventsList, heading } = getEventsData();

  return (
    <ListItem icon={icon} title={title} heading={isHoursType ? heading : null}>
      <Table size="small" aria-label={title}>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{eventsList}</TableBody>
      </Table>
    </ListItem>
  );
}

Hours.defaultProps = {
  isHoursType: false,
  data: []
};

Hours.propTypes = {
  isHoursType: PropTypes.bool,
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default Hours;

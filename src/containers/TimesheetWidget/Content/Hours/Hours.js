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

Hours.defaultProps = {
  data: []
};

Hours.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default Hours;

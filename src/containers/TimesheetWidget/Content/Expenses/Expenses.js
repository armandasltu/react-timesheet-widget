import React from 'react';
import PropTypes from 'prop-types';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from '../ListItem';

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

Expenses.defaultProps = {
  data: []
};

Expenses.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Expenses;

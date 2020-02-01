import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AvTimerIcon from '@material-ui/icons/AvTimer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ListItem(props) {
    const { icon, title, content } = props;

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

    return <div>
        <Heading>
            {icon}<span>{title}</span>
        </Heading>
        <Content>
            {content}
        </Content>
    </div>;
}

function Expenses(props) {
    const { title, data } = props;

    const table = <Table size="small" aria-label={title}>
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
    </Table>;

    return <ListItem icon={<AttachMoneyIcon />} title={title} content={table} />;
}

function Hours(props) {
    const { title, data, icon } = props;

    const table = <Table size="small" aria-label={title}>
        <TableHead>
            <TableRow>
                <TableCell>Type</TableCell>
                <TableCell align="right">Duration</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(({ eventType, firstTaskStart, lastTaskEnd }, key) => {
                const hours = moment.unix(lastTaskEnd - firstTaskStart).format('H:mm');

                return <TableRow key={key}>
                    <TableCell component="th" scope="row">
                        {eventType}
                    </TableCell>
                    <TableCell align="right">{hours}</TableCell>
                </TableRow>;
            }
            )}
        </TableBody>
    </Table>;

    return <ListItem icon={icon} title={title} content={table} />;
}

function Content(props) {
    const { events: { hours, expenses, additionalHours }, selectedDate } = props;

    const selectedDateLabel = moment(selectedDate).format('dddd DD.MM.YYYY');
    const ScrollableContainer = styled.div`
                margin-top: 1rem;
                height: 200px;
                overflow: auto;
            `;

    return <div className="timesheet-widget--content">
        {selectedDateLabel}
        <ScrollableContainer>
            <Hours title={'Hours'} data={hours} icon={<AccessTimeIcon />} />
            <Expenses title={'Expenses'} data={expenses} />
            <Hours title={'Additional hours'} data={additionalHours} icon={<AvTimerIcon />} />
        </ScrollableContainer>
    </div>;
}

export default Content;
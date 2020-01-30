import React, { useState } from 'react';
import moment from 'moment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CalendarList from '../../../components/CalendarList';

function Header() {
    const [selectedDate, setSelectedDate] = useState();

    const calendarLabel = moment().format('MMMM YYYY');

    const getDays = () => {
        const days = []
        const dateStart = moment().subtract(6, 'days');
        for (let i = 0; i <= 6; i++) {
            days.push({
                date: dateStart.toDate(),
                hours: '-',
                onClick: (item) => {
                    setSelectedDate(item);
                }
            });
            dateStart.add(1, 'days');
        }
        return days;
    }

    const daysList = getDays();

    return <div className="timesheet-widget--header">
        <b>
            {calendarLabel}
            <CalendarTodayIcon />
        </b>
        <CalendarList selected={selectedDate} list={daysList} />
    </div>;
}

export default Header;
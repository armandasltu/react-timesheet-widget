import React, { useState } from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';

import './style.scss';
import Header from './Header';

function TimesheetWidget() {
    const [selectedDate, setSelectedDate] = useState();
    const selectedDateLabel = moment(selectedDate).format('dddd DD.MM.YYYY')

    const buttonStyle = {
        "background-color": "#F08900",
        "width": "100%",
        "color": "#FFFFFF",
        "font-weight": "bold"
      };

    return (
        <div className="timesheet-widget">
            <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <div className="timesheet-widget--content">
                {selectedDateLabel}
            </div>
            <div className="timesheet-widget--footer">
                <Button size="large" onClick={() => alert('test')} style={buttonStyle}>Add task</Button>
            </div>
        </div>
    );
}

export default TimesheetWidget;
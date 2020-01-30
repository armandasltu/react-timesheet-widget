import React, { Component } from 'react';
import './style.scss';
import Header from './Header';

class TimesheetWidget extends Component {
    render() {
        return (
            <div className="timesheet-widget">
                <Header />
                <div className="timesheet-widget--content">Tuesday 27.05.2020</div>
                <div className="timesheet-widget--footer">Add task</div>
            </div>
        );
    }
}

export default TimesheetWidget;
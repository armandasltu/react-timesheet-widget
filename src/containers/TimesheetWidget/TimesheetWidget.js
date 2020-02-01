import React, { useState } from 'react';
import { useStore } from '../../store';
import { Button } from '@material-ui/core';
import './style.scss';
import { fetchEvents } from '../../actions';
import Loader from '../../components/Loader/Loader';
import Header from './Header';
import Content from './Content';

function TimesheetWidget() {
    const [{ events }, dispatch] = useStore();

    React.useEffect(() => {
        !events.isLoaded && fetchEvents(dispatch);
    });

    const [ selectedDate, setSelectedDate ] = useState();

    const buttonStyle = {
        "backgroundColor": "#F08900",
        "width": "100%",
        "color": "#FFFFFF",
        "fontWeight": "bold"
    };

    return (
        <div className="timesheet-widget">
            <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            {
                !events.isLoaded ? (<Loader />) : (<Content selectedDate={selectedDate} events={events} />)
            }
            <div className="timesheet-widget--footer">
                <Button size="large" onClick={() => alert('test')} style={buttonStyle}>Add task</Button>
            </div>
        </div>
    );
}

export default TimesheetWidget;
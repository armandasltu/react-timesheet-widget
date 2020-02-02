import React from 'react';
import { useStore } from '../../store';
import { Button } from '@material-ui/core';
import './style.scss';
import { fetchEvents, groupEventsByDate } from '../../actions';
import Loader from '../../components/Loader/Loader';
import Header from './Header';
import Content from './Content';

function TimesheetWidget() {
    const [{ events, groupedEvents, selectedDate }, dispatch] = useStore();

    React.useEffect(() => {
        !events.length && fetchEvents(dispatch);
        groupEventsByDate(dispatch);
    }, [events, selectedDate]);


    const buttonStyle = {
        "backgroundColor": "#F08900",
        "width": "100%",
        "color": "#FFFFFF",
        "fontWeight": "bold"
    };

    return (
        <div className="timesheet-widget">
            <Header />
            {
                !groupedEvents.isLoaded ? (<Loader />) : (<Content selectedDate={selectedDate} events={groupedEvents} />)
            }
            <div className="timesheet-widget--footer">
                <Button size="large" onClick={() => alert('Add task')} style={buttonStyle}>Add task</Button>
            </div>
        </div>
    );
}

export default TimesheetWidget;
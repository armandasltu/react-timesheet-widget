import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
`;

const Item = styled.li`
    list-style-type: none;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const DayTitle = styled.div`
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: rgba(0,0,0,0.6);
`;

const Day = styled.div`
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    color: ${props => props.active ? `#FFFFFF` : 'inherit'};
    background-color: ${props => props.active ? `#F08900` : 'transparent'};
    border: 1px solid ${props => props.current ? `#F08900` : 'transparent'};
    border-radius: 4px;
`;

const Hours = styled.div`
    font-size: 0.875rem;
    color: rgba(0,0,0,0.6);
`;

const CalendarList = (props) => {
    const { list, selected } = props;

    if (!list) {
        return null;
    }

    return <List>
        {list.map(({ date, hours, onClick }, key) => {
            const selectedDay = moment(selected).format('D');
            const itemDay = moment(date).format('D');
            const isActive = selectedDay === itemDay;
            const isCurrentDay = itemDay === moment().format('D');

            return <Item key={key} onClick={() => onClick(date)}>
                <DayTitle>{moment(date).format('ddd')}</DayTitle>
                <Day active={isActive} current={isCurrentDay}>{moment(date).format('D')}</Day>
                <Hours>{hours}</Hours>
            </Item>;
        })}
    </List>
};

export default CalendarList;

import axios from 'axios';
import * as types from './types';
import './mocks';

export const fetchEvents = async (dispatch) => {
    // @TODO handle errors
    try {
        const response = await axios.get(`/events`)
            .then(response => response)
            .catch(error => {
                console.log(error);
            });

        const { events } = response.data;

        return dispatch({ type: types.FETCH_EVENTS, payload: { events } })
    } catch (error) {
        console.log(error);
    }
};

export const setSelectedDate = (dispatch, selectedDate) => dispatch(
    { type: types.SET_SELECTED_DATE, payload: { selectedDate } }
);
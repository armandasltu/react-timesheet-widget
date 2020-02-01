
import axios from 'axios';
import * as types from './types';
import './mocks'; 

export const fetchEvents = async (dispatch) => {
    // @TODO handle errors
    const response = await axios.get(`/events`)
        .then(response => {
            console.log('response: ', response);
            return response;
        })
        .catch(error => {
            console.log(error);
    });

    const { events } = response.data;

    return dispatch({ type: types.FETCH_EVENTS, payload: { events } })
};
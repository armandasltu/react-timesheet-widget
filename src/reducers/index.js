import * as events from './events';
import * as types from '../actions/types';

const createReducer = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export default createReducer({
  [types.FETCH_EVENTS]: events.addEvents,
  [types.SET_SELECTED_DATE]: events.setSelectedDate,
  [types.GROUP_EVENTS_BY_DATE]: events.groupEventsByDate
});

// src/reducers/logs_reducer.js

import { RECEIVE_USER_LOGS, RECEIVE_NEW_LOG } from '../actions/log_actions';
  
  const LogsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_USER_LOGS:
        newState.user = action.logs.data;
        return newState;
      case RECEIVE_NEW_LOG:
        newState.new = action.log.data
        return newState;
      default:
        return state;
    }
  };
  
  export default LogsReducer;
// src/actions/log_actions.js

import { getUserLogs, writeLog } from '../util/log_api_util';

export const RECEIVE_USER_LOGS = "RECEIVE_USER_LOGS";
export const RECEIVE_NEW_LOG = "RECEIVE_NEW_LOG";

export const receiveUserLogs = logs => ({
  type: RECEIVE_USER_LOGS,
  logs
});

export const receiveNewLog = log => ({
  type: RECEIVE_NEW_LOG,
  log
})

export const fetchUserLogs = id => dispatch => (
  getUserLogs(id)
    .then(logs => dispatch(receiveUserLogs(logs)))
    .catch(err => console.log(err))
);

export const composeLog = data => dispatch => (
  writeLog(data)
    .then(log => dispatch(receiveNewLog(log)))
    .catch(err => console.log(err))
);
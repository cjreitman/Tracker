// src/util/log_api_util.js

import axios from 'axios';

export const getUserLogs = id => {
  return axios.get(`/api/logs/user/${id}`)
};

export const writeLog = data => {
  console.log(data)
  return axios.post('/api/logs/', data)
}
// src/components/logs/logss_container.js

import { connect } from 'react-redux';
import { fetchUserLogs } from '../../actions/log_actions';
import Logs from './logs';

const mapStateToProps = (state) => {
  return {
    logs: Object.values(state.logs.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLogs: () => dispatch(fetchUserLogs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
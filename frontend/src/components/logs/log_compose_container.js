// src/components/logs/log_compose_container.js

import { connect } from 'react-redux';
import { composeLog } from '../../actions/log_actions';
import LogCompose from './log_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newLog: state.logs.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeLog: data => dispatch(composeLog(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogCompose);
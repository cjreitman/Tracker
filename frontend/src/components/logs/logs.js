// src/components/logs/logs.js

import React from 'react';
import { withRouter } from 'react-router-dom';
import LogBox from './log_box';

class Log extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: []
    }
  }

  componentWillMount() {
    this.props.fetchLogs();
  }

  componentWillReceiveProps(newState) {
    this.setState({ logs: newState.logs });
  }

  render() {
    if (this.state.logs.length === 0) {
      return (<div>There are no Logs</div>)
    } else {
      return (
        <div>
          <h2>All Logs</h2>
          {this.state.logs.map(log => (
            <LogBox key={log._id} name={log.name} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Log);
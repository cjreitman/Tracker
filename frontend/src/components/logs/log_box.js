// src/components/logs/log_box.js

import React from 'react';

class LogBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.name}</h3>
        </div>
    );
  }
}

export default LogBox;
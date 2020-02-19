// src/components/tweets/tweet_compose.js

import React from 'react';
import LogBox from './log_box';

class LogCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: "",
          newLog: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newLog: nextProps.newLog.name});
  }

  handleSubmit(e) {
    e.preventDefault();
    let log = {
      name: this.state.name
    };

    this.props.composeLog(log); 
    this.setState({log: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.name}
                        onChange={this.update()}
                        placeholder="Search the food"
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <LogBox name={this.state.newLog} />
        </div>
    )
  }
}

export default LogCompose;
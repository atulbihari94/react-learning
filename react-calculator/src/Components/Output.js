import React, { Component } from "react";

export default class KeyPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = 'result'>
        <p>{this.props.result}</p>
      </div>
    );
  }
}

import React, { Component } from "react";
export default class BinartToDecimal extends Component {
  constructor(props) {
    super(props);
    this.onclickOk = this.onclickOk.bind(this);
    this.state = {
        binartNumnber : 0
    }
  }
  onclickOk(topicBox) {
    alert(parseInt(this.refs.topic.value, 2).toString(10));  
    this.setState({
        binartNumnber :parseInt(this.refs.topic.value, 2).toString(10),
    });
  }
  render() {
    return (
      <div className="result">
        <form>
          <label><input ref="topic" type="text" name="input" placeholder="Enter Binary Number"/></label>
          <button value="Send" onClick={this.onclickOk}>Ok</button>
          <p>binartNumnber = {this.binartNumnber}</p>
          {/* <label> <input type="text" name="output"  /></label> */}
        </form>
      </div>
    );
  }
}

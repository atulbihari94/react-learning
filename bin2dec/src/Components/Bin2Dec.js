import React, { Component } from "react";
export default class BinartToDecimal extends Component {
  constructor(props) {
    super(props);
    this.onclickOk = this.onclickOk.bind(this);
    this.state = {
      binaryNumber: 0,
      decimalNumber: 0
    }
  }
  onclickOk(event) {
    // alert(parseInt(this.refs.topic.value, 2).toString(10));  
    event.preventDefault()
    this.setState({
      decimalNumber: parseInt('' + this.state.binaryNumber, 2).toString(10),
    });
  }
  render() {
    return (
      <div className="result">
        <form>
          <label><input ref="topic" onChange={event => this.setState({ binaryNumber: event.target.value })} type="text" name="input" placeholder="Enter Binary Number" /></label>
          <button value="Send" onClick={this.onclickOk}>Ok</button>
          <p>Decimal number = {this.state.decimalNumber}</p>
        </form>
      </div>
    );
  }
}

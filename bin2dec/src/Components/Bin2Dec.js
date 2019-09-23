import React, { Component } from "react";
export default class BinartToDecimal extends Component {
  constructor(props) {
    super(props);
    this.onclickOk = this.onclickOk.bind(this);
    this.state = {
      binaryNumber: 0,
      decimalNumber: 0,
      octalNumber: 0,
      hexaNumber: 0,
    }
  }
  onclickOk(event) {
    // alert(parseInt(this.refs.topic.value, 2).toString(10));  
    event.preventDefault()
    this.setState({
      decimalNumber: parseInt(this.state.binaryNumber, 2).toString(10),
      octalNumber: parseInt(this.state.binaryNumber, 2).toString(8),
      hexaNumber: parseInt(this.state.binaryNumber, 2).toString(16),
    });
  }
  render() {
    return (
      <div style={{ width: '200px', height: '100px', textAlign: 'center', display: 'inline' }}>
        <form>
          <label><input ref="topic" onKeyUp={event => this.setState({
            binaryNumber: event.target.value,
            decimalNumber: parseInt(event.target.value, 2).toString(10),
            octalNumber: parseInt(event.target.value, 2).toString(8),
            hexaNumber: parseInt(event.target.value, 2).toString(16),
          })} type="text" name="input" placeholder="Enter Binary Number" /></label>
          <button value="Send" onClick={this.onclickOk}>Ok</button>
          <p>Decimal number = {this.state.decimalNumber}</p>
          <p>Octal number = {this.state.octalNumber}</p>
          <p>Hexa number = {this.state.hexaNumber}</p>

        </form>
      </div>
    );
  }
}

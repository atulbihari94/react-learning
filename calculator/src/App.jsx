import React, { Component } from "react";
import Button from "./components/Button";
import { Input } from "./components/Input";
import ClearButton from "./components/ClearButton";
import  {evaluate} from 'mathjs';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    };
    // this.addToInput = this.addToInput.bind(this);
  }
  addToInput = val => {
    console.log('you clicked >>', val.target.innerHTML)
    val = val.target.innerHTML;
    this.setState({ input: this.state.input + val });
    console.log('this.state.input', this.state.input);
  }
  handleEquals = () => {
    // eslint-disable-next-line no-eval
    console.log('this.state.output', this.state.output)
    this.setState({ output: evaluate(this.state.input) });
  }
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <br />
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
          </ClearButton>
            <div style={{ width: '400px', height: '50px', border: '1px solid yellow' }}>
              =<output style={{fontSize:'24px'}}>{this.state.output}</output></div>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEquals}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

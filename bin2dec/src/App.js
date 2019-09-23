import React, { Component } from "react";
import BinartToDecimal from "./Components/Bin2Dec";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BinartToDecimal/>
      </div>
    );
  }
}

export default App;

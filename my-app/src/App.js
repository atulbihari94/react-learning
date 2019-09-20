import React from 'react';
import logo from './logo.svg';
import Calendar from 'react-calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Calendar
            // onChange={this.onChange}
            value={new Date()}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

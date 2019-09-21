import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import Calendar from 'react-calendar';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [buttonToggle, setButtonToggle] = useState(false);

  const onChange = (date) => {
    setDate(date);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setButtonToggle(!buttonToggle)}>
          choose your date (this is toggle button)
        </button>
        {
          buttonToggle ?
            <div>
              <Calendar
                onChange={onChange}
                value={date}
              />
              <h2>you are select the {'' + date.toDateString()}</h2>
            </div>
            : 'click on the button to show the calendar'}

      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import PrintTable from './Print-table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PrintTable title = {`Table of ${5} `} table = {5}/>
      </header>
    </div>
  );
}

export default App;

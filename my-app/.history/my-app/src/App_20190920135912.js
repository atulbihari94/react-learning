import React from 'react';
import './App.css';
import PrintTable from './Print-table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PrintTable table = {5} length = {10}/>
      </header>
    </div>
  );
}

export default App;

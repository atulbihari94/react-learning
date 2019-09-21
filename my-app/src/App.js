import React from 'react';
import './App.css';
import Table from './table'
import Atul from './about-atul'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Table number = {5}/>
      <Atul  sex ={5}/>
      </header>
    </div>
  );
}

export default App;

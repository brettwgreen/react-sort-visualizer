import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionSort from './components/SelectionSort.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="mainLayout">
        <SelectionSort></SelectionSort>
      </div>
    </div>
  );
}

export default App;

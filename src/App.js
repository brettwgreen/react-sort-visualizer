import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionSort from './components/SelectionSort.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main">
          <SelectionSort></SelectionSort>
        </div>
      </header>
    </div>
  );
}

export default App;

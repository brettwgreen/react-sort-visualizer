import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortCollection from './components/SortCollection.js'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <SortCollection></SortCollection>
  </div>
  );
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import Budget from './budget/Budget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = 'container my-5'>
        <Budget />
      </div>
    </div>
  );
}

export default App;

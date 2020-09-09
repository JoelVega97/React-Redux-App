import React from 'react';
import './App.css';
import Loader from './components/Loader'

function App() {
  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <h2>All 151 OG POKEMON</h2>
      <Loader />
    </div>
  );
}

export default App;

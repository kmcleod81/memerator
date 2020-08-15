import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MemeCreation from './pages/MemeCreation';

function App() {
  return (
    <div className="App">
      <Nav />
      <MemeCreation />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;

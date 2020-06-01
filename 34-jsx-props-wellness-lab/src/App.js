import React from 'react';
import './App.css';
import Wheel from './Wheel.js';
import GuidanceContainer from './GuidanceContainer.js';

function App() {
  return (
    <div className="App">
      <h1> Welcome to the Wellness Center</h1>
      <Wheel/>
      {/** TODO: Import and render the Wheel component, provided for you. It does not need any props. */}
      <hr />
      <GuidanceContainer/>
      {/** TODO: Import and render the GuidanceContainer component, provided for you. It does not need any props. */}
    </div>
  );
}

export default App;

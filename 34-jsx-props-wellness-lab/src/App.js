import React from 'react';
import './App.css';
import Wheel from './Wheel';
import GuidanceContainer from './GuidanceContainer'

function App() {
  return (
    <div className="App">
      <h1> Welcome to the Wellness Center</h1>
      {/** TODO: Import and render the Wheel component, provided for you. It does not need any props. */}
      <Wheel />
      <hr />
      {/** TODO: Import and render the GuidanceContainer component, provided for you. It does not need any props. */}
      <GuidanceContainer/>
    </div>
  );
}

export default App;

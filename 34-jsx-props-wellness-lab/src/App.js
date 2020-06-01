import React from 'react';
import './App.css';
import Wheel from './Wheel';

function App() {
  return (
    <div className="App">
      <h1> Welcome to the Wellness Center</h1>
      {/** TODO: Import and render the Wheel component, provided for you. It does not need any props. */}
      <Wheel />	
      <hr />
      <GuidanceContainer />
    </div>
  );
}

export default App;

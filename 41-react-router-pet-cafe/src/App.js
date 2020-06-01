import React from 'react';
import './App.css';
import { Auth, Help, Home, Nav, PetIndex, PetProfile } from './components';

class App extends React.Component {
  render(){
    return (
      <div className="App">
       { /** 
        *  TODOs: 
        * 1. Decide if any components should always be shown - those won't go into routes
        * 2. For the rest of the components, use the tools from React Router to make sure they are the only component rendered at their given path
        * 
       */}
        <Nav />
        <Auth />
        <Help />
        <Home />
        <PetProfile />
        <PetIndex />
      </div>
    );
  }
}

export default App;

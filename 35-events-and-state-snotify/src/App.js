import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
	allSongs: ''
  }
  
  getAllSongs = () => {
  	  fetch('../db.json')
  	  	  .then(res => res)
  	  	  .then(console.log)
  }
  
  renderNav = () => {
  	 this.getAllSongs()
    return (
      <div className="simple-flex-row">
        <button onClick={null /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

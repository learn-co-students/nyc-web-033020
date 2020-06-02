import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {


  state = {
    /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
  songs:[] 
  }
  
  newSongs = () => {
    fetch(API_ENDPOINT)
    .then(r=>r.json())
    .then((result)=>{
      this.setState({
      songs: result
      })
    })
  }
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.newSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        
        <MainContainer songs ={this.state.songs} /> 
      </div>
    );
  }
}

export default App;

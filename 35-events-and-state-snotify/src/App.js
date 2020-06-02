import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
      songList: []
    }
  }
  

  fetchSongs = () => {
    fetch(API_ENDPOINT)
      .then(resp => resp.json())
      .then(json => {
        // console.log(this.state.songList)
        this.setState({
          songList: json
        })
        // console.log(this.state.songList)
      })
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer handleSongs={this.state.songList} /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

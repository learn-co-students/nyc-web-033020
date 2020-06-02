import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
    songs: fetch(`http://localhost:6001/songs`)
  }

songsData = () => this.state.songs.then(res => res.json()).then(data => {
  data.map(() => {
    <MainContainer
    key={data.id}
    title = {data.title}
    artist = {data.artist}
    url ={data.url}
    genre={data.genre}
    favorite = {data.favorite}
    />
  })
})
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSong /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
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

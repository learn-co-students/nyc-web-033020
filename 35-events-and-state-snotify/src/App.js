import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`
let requestHeaders = {accept:"application/json",
               "Content-Type": "application/json"}
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

  updateFav = (id, favorite) =>{
    fetch(`${API_ENDPOINT}/${id}`,{
      method: "PATCH",
      headers: requestHeaders,
      body: JSON.stringify({ favorite: !favorite })
    })
    .then(r => r.json())
    .then(updatedSong => {
      let targetSongIndex = this.state.songs.findIndex(song => song.id === updatedSong.id)
      let updatedSongs = [...this.state.songs]
      updatedSongs[targetSongIndex] = updatedSong

      this.setState({
        songs: updatedSongs
      })
    }
     
      )
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
        
        <MainContainer songs ={this.state.songs} updateFav={this.updateFav} /> 
      </div>
    );
  }
}

export default App;

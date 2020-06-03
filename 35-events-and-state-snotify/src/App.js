import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`
// export const fetchSongs = () => fetch(API_ENDPOINT).then(res => res.json())

class App extends React.Component {
  state = {
    // songs: fetch(API_ENDPOINT)
    songs: [],
    /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
  }

  updateFavorite = (id, favorite) => {
    // setState and update songs 
    fetch(`${API_ENDPOINT}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }, 
      body: JSON.stringify({ favorite: !favorite })
    })
    .then(res => res.json())
    .then(updatedSong => {
      console.log(updatedSong)
      // find the old song
      // find where it was in the array
      // replace that with the new representation from the backend
      // set state correctly 
      let targetSongIndex = this.state.songs.findIndex(song => song.id === updatedSong.id)
      let updatedSongs = [...this.state.songs]
      // arrays are pass by reference so we have to make a copy and can use spread operator 
      updatedSongs[targetSongIndex] = updatedSong

      this.setState({ songs: updatedSongs })


      // update the state of songs 
      // which will force a rerender
      // and update what the user sees 
    })
  }

  getSongsData = () => {
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        console.log('songs: ', data)
        // change my state here to reflect this update 
        // NO GO THIS MUTATES AND DOES NOT RERENDER this.state.songs = data 
        this.setState({ songs: data })
        console.log('state songs ', this.state.songs)
      })
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongsData /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    // console.log('inside of render, state songs', this.state.songs)
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} updateFavorite={this.updateFavorite}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

/**
 * 
 * Props v. State
 * inherited from parents, can't really changes v. held internally and you own it 
 * Height, Eye Color, Hair Texture     v.     How you feel today, physical fitness 
 * 
 */

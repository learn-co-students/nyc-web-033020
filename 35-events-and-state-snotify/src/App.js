import React from 'react'
import './App.css'
import MainContainer from './components/MainContainer'

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    /* TODO: What should go in state here? (Anything you don't want to have to fetch again) */
    songs: []
  }

  updateFavorite = (id, favorite) => {
    fetch(`${API_ENDPOINT}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({favorite: !favorite})
    })
    .then(resp => resp.json())
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
    .then(resp => resp.json())
    .then(songs => {
      console.log("songs: ", songs)
      this.setState({
        songs: songs
      })
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

  render() {
    return (
      <div className="App">
        {this.renderNav()} {/* The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} updateFavorite={this.updateFavorite}/> {/* TODO: What props do you need? */}
      </div>
    )
  }
}

export default App

/*
Deliverables:
1) √GET request of all songs when the 'Get Songs' btn is clicked (onClick)
    a) in class App: songs: []
    b) define a getSongsData method w/ GET request
    c) in the 2nd .then: update the songs state (empty arr) w/ setState
    d) in renderNav component: onClick event listener w/ getSongsData method invoked when btn is clicked
2) √Render all songs in the SongList
    Start moving props down to MainContainer, SongList, & SongItem (where it gets rendered):    
    a) in App: pass songs={this.state.songs} to MainContainer (songs is prop key & this.state.songs is prop value)
    b) in MainContainer: pass songs={props.songs} to SongList
      - make sure MainContainer already has props passed in as a param
    c) in SongList, render a SongItem: {props.songs.map(song => <SongItem key={song.id} {...song} />)}
      - make sure SongList already has props passed in as a param
      - SongList should import SongItem
      - ...song passes down a prop for each key (title, artist, url, genre, favorite) inside of the song obj
3) When 'Likes' is clicked on a given song in the SongList, its like count should increase (not persistent)
    a) in SongItem: change functional component to a class component
    b) use ES6 syntax to write this.state (instead of constructor)
    c) define an increaseLikes method & .setState on likes to update them
    d) onClick event listener in render() that references increaseLikes method (when clicked, this method gets invoked)
4) When the heart is clicked on a given song in the SongList, toggle its favorite value (should persist)
    a) define updateFavorite
      - the method needs to be defined in the same component where the state you need to change lives (state lives in App b/c favorite is a key of the songs obj)
    b) pass in id in updateFavorite so you can identify which song it is
    c) pass in favorite in updateFavorite so you can use it in JSON.stringify
    d) PATCH request to URL/id
    e) start moving updateFavorite prop down to MainContainer, SongList, & SongItem (where it gets rendered)
    f) 
*/
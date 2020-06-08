import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: [],
    genre: '',
    queue: null,
    nextInQ: null 
  }
  

   fetchSongs = () => {
    fetch(API_ENDPOINT).then(res => res.json()).then(res => {this.setState({songs: [...res]})})
    }



    changeGenre = (event) => {
      this.setState({ genre: event.target.value })
    }

    favs = event => {
      if (event.target.value === 'Just Favs'){
         this.setState({ songs: this.state.songs.filter(song => song.favorite)})
      } else {
        this.fetchSongs()
      }
    }
   
    handleFavorite = (id) => {
      const favSong = this.state.songs.find(song => song.id === id)
      const newSongArray = this.state.songs.slice()
      const index = this.state.songs.indexOf(favSong)
      favSong.favorite = !favSong.favorite
      newSongArray[index] = favSong
      this.setState({
        songs: newSongArray
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

  playInQueue = id => {
    const playSong = this.state.songs.find(song => song.id === id)
    this.setState({ queue: playSong})
  }

  nextSong = id => {
    const playNextSong = this.state.songs.find(song => song.id === id)
    this.setState({ nextInQ: playNextSong})
  }

  
  render(){
    let songsList = this.state.songs.filter(song => song.genre.includes(this.state.genre))
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer 
        next = {this.nextInQ}
        nextSong={this.playInQueue}
        songForQ={this.state.queue}
        playInQueue={this.playInQueue}
         songs={songsList}
         changeGenre={this.changeGenre}
         favs={this.favs} 
         handleFavorite={this.handleFavorite}/> 
      </div>
    );
  }
}

export default App;

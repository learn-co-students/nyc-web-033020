import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`
let requestHeaders = {accept:"application/json",
               "Content-Type": "application/json"}
class App extends React.Component {
  state = {
  songs:[], 
  currentSong:null,
  queues: [],
  searchTerm:''
  }
  
  
  newSongs = () => {
    fetch(API_ENDPOINT)
    .then(r=>r.json())
    .then((result)=>{
      this.setState({
      songs: result,
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

  renderUrl = (song) => {
      this.setState({currentSong:song})
  }

  listSongs = (song) => {
    this.setState({queues: [...this.state.queues, song]})
  }

  deleteSong = (id) => {
    let updatedQueues = this.state.queues.filter(song=> song.id !== id)
    this.setState({ queues:updatedQueues })
  }

  searchHandler = (e) => {
    this.setState({ searchTerm : e.target.value})
    let searchedSongs = this.state.songs.filter(song=> song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    let wantedSongs = []
    searchedSongs? wantedSongs = searchedSongs : wantedSongs = [...this.state.songs]
    this.setState({songs:wantedSongs})
  }

  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.newSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..." value={this.state.searchTerm} onChange={this.searchHandler}/>
      </div>
    )
  }

  render(){

    const {songs,currentSong,queues} = this.state
    console.log("!!", this.state.searchTerm)
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        
        <MainContainer songs ={songs}  listSongs={this.listSongs} updateFav={this.updateFav} currentSong = {currentSong} renderUrl={this.renderUrl} queues={queues} deleteSong={this.deleteSong}/> 
      </div>
    );
  }
}

export default App;

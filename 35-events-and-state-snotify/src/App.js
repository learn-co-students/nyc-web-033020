import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songList: []
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
      // find the old song
      // find where it was in the array
      // replace that with the new representation from the backend
      // set state correctly 
      let targetSongIndex = this.state.songList.findIndex(song => song.id === updatedSong.id)
      let updatedSongs = [...this.state.songList]
      // arrays are pass by reference so we have to make a copy and can use spread operator 
      updatedSongs[targetSongIndex] = updatedSong

      this.setState({ songList: updatedSongs })
    })
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
        <MainContainer songs={this.state.songList} updateFavorite={this.updateFavorite} /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

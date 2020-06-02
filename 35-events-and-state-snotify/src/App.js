import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
    songs:[]
  }
  
  getSongs = () => {
    fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      
      this.setState({songs:data})
    })
}

favSong = (key,newFav) => {
  console.log(key)
  fetch(`http://localhost:6001/songs/${key}`, {
  method: "PATCH",
  headers: {
  "Content-type": "application/json",
  "accept": "application/json"
  },
  body: JSON.stringify({favorite: newFav})
  })
  .then(res => res.json())
  .then(updatedSong => {
    // make logic to set the state 
    let newSongs = this.state.songs.map(song => {
      if (song.id === updatedSong.id){
        return updatedSong
      } else {
        return song 
      }
    
    })

    this.setState({songs: newSongs})

  })
}



  
  
  renderNav = () => {

    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }


  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer faved={this.favSong} songs={this.state.songs}  /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
    songs:[],
    queuedSongs:[],
    currentSong:''
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

  //   .then(res => res.json())
  //   .then(updatedSong => {
  //     console.log(updatedSong)
  //     // find the old song
  //     // find where it was in the array
  //     // replace that with the new representation from the backend
  //     // set state correctly 
  //     let targetSongIndex = this.state.songs.findIndex(song => song.id === updatedSong.id)
  //     let updatedSongs = [...this.state.songs]
  //     // arrays are pass by reference so we have to make a copy and can use spread operator 
  //     updatedSongs[targetSongIndex] = updatedSong

  //     this.setState({ songs: updatedSongs })


  //     // update the state of songs 
  //     // which will force a rerender
  //     // and update what the user sees 
  //   })
  // }

    this.setState({songs: newSongs})

  })
}

queueSong = (title, artist) => {
  const oldSongs = this.state.queuedSongs
  const newSongs = [...oldSongs, `${title} by ${artist}`]
  this.setState({queuedSongs: newSongs})
}

playSong = (data) => {
this.setState({currentSong: data})
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
        <MainContainer 
        faved={this.favSong} 
        songs={this.state.songs} 
        queueSong={this.queueSong} 
        queuedSongs={this.state.queuedSongs}  
        playSong={this.playSong}
        currentSong={this.state.currentSong}
        /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: []
  }

  getSongs = (event) => {
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs}))
  }

  onFavoriteChange = (song) => {
    // fetch(API_ENDPOINT + '/' + song.id, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     favorite: !song.favorite
    //   })
    // }).then(res => res.json())
    // .then(console.log)

    this.setState(prevState => {
      let songs = prevState.songs
      let elem = songs.find(item => item.id == song.id)
      elem.favorite = !elem.favorite
      console.log('setting state, old:', !elem.favorite, 'new:', elem.favorite)
      return {songs: songs}
    })
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} onFavoriteChange={this.onFavoriteChange}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: fetch(API_ENDPOINT)
    // hasBeenClicked: false
  }

  // handleClick = () => {
  //   this.setState({
  //     hasBeenClicked: true,
  //     // this.fetchSongs()
  //   })
  // }
  
  songData = () => {
    this.state.songs
    .then(resp => resp.json())
    .then(data => {
      data.map(() => (
        <MainContainer
        key = {data.id}
        title = {title.id}
        />

      ))
    })
  }



  // fetchSongs = () => {
  //   fetch(API_ENDPOINT)
  //   .then(resp => resp.json())
  //   .then(console.log)
  // }


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
        {this.renderNav}
        {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

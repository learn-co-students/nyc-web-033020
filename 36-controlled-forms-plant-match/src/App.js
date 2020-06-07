import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomeView from './components/HomeView';

class App extends React.Component {
  state = {
    view: 'home',
    username: null // TODO: replace null with 'ChromeBoi' or your name to see the greeting
  }

  changeView = (view, username) => {
    this.setState({ 
      view: view,
      username: username
     })
  }


  render() {
    
    return (
      <div className="App">
       <Navbar changeView={this.changeView} view={this.state.view} username={this.state.username} />
       {this.state.view === 'login' && <Login changeView={this.changeView}/>}
       {this.state.view === 'home' && <HomeView />}
      </div>
    );
  }
}

export default App;

// below is practice of syntax in above render() conditional return
// const greeting = (arg) => {
//   if(arg === "hello"){
//     console.log("hello")
//   } else if (arg === "goodbye"){
//     console.log("goodbye")
//   }
// };

// const shorterGreeting = (arg) => {
//   arg === "hello" && console.log("hello");
//   arg === "goodbye" && console.log("goodbye");
// };




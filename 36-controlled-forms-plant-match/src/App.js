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

  changeView = (view) => {
    this.setState({ view })
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


/* Deliverables:
1) onClick event listener on "Login", which will show the Login component and the form it contains. Make Login a fully controlled form
    a) in Login component, state obj: set states (name, username, password, & confirmation), where their initial values are empty strings (for it to be a controlled form, input values must come from state)
    b) in render() inputs: pass in value attributes w/ initial states (e.g., value={this.state.name})
    c) in render() inputs: define onClick attribute, which will update the state value when the event occurs (e.g., onChange={this.nameChange}, where nameChange is a method w/ setState for the name state)
    d) define the 4 clickHandler methods: nameChange, usernameChange, passwordChange, confirmationChange

    1 method version to do all handle changes: relies on 1) name attributes on each of the inputs & 2) dynamic keys (ignore step d above)
    d) in render() inputs: pass in name attributes that equal to the state name string
    e) define handleChange method: this.setState({[event.target.name]: event.target.value})
      - [event.target.name] is the key: [] allow it to be evaluated as a variable instead of a string literal
      - event.target.value is the value
    f) in render() inputs: change all onClick methods to reference handleChange method

2) When it submits, it should redirect the user to the plants view
    a) in render() button: define onClick attribute w/ handleSubmit method
    b) define handleSubmit: 1) event.preventDefault(), 2) this.props.changeView('home') - provided
    c) if/else conditional for password & confimation to match

3) On the plants view, when a user types into the search bar, the plants should be filtered. Consider where state should live for this controlled form and how to complete that filter
    a) in HomeView component, state obj: add searchTerm: ""
    b) in render() input: pass in value attribute w/ searchTerm initial state: value={this.state.searchTerm}
    c) in render() input: define onChange attribute w/ handleChange method
    d) define handleChange method: this.setState({searchTerm: event.target.value})
*/
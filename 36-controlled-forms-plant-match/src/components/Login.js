import React from 'react';

class Login extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmation: ''
    }

    // SHORTER DRYER VERSION ----- BETTER BUT NOT NECESSARY NOW IF YOURE NERVOUS
    // requires each input has a name attribute that matches the corresponding key in state
    // uses dynamic keys [] to update the right key in state 

    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value })
    }
    
    handleUsernameChange = event => {
        this.setState({ username: event.target.value })
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value })
    }

    handleConfirmationChange = event => {
        this.setState({ confirmation: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.password === this.state.confirmation){
            this.props.changeView('home')
            this.props.changeUsername(this.state.username)
        } else {
            alert('Your information did not match. Please try again!')
        }
    }

    render(){
        console.log(this.state)
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h2>Create an Account</h2>
                <input onChange={this.handleNameChange} name="name" value={this.state.name} placeholder="Name"/>
                <input onChange={this.handleUsernameChange} name="username" value={this.state.username} placeholder="Username"/>
                <input onChange={this.handlePasswordChange} name="password" value={this.state.password} placeholder="Password"/>
                <input onChange={this.handleConfirmationChange} name="confirmation" value={this.state.confirmation} placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

/**
 * 
 * 1. a key in state to represent EACH input
 * 2. connect each input to the state with the value attribute
 * 3. connect state back to the input with the onChange 
 * 4. optional onSubmit 
 */

export default Login;
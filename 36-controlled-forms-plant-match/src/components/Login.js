import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name:'',
        username:'',
        password:'',
        confirmPassword:'',

    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    //this.props.changeView('home')

    submitHandler = (event) => {
        event.preventDefault() // this makes page not go to home after every submit
        if (this.state.password === this.state.confirmPassword){
            this.props.changeName(this.state.username)
            this.props.changeView('home')
        } else {
            alert("Password does not match, Try Again!")
        }
    } 
    
    submitName = (event) => {
        this.setState({name: event.target.value})
       
       
    }

    submitUsername = (event) => {
        
        this.setState({username: event.target.value})
        
    }

    submitPassword = (event) => {
        
        this.setState({password: event.target.value})
       
    }

    submitconfirmPassword = (event) => {
       
        this.setState({confirmPassword: event.target.value})
      
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={this.submitHandler}>
                <h2>Create an Account</h2>
                <input placeholder="Name" value={this.state.name} onChange={event => this.submitName(event)}/>
                <input placeholder="Username" value={this.state.username} onChange={event => this.submitUsername(event)}/>
                <input placeholder="Password" value={this.state.password} onChange={event => this.submitPassword(event)}/>
                <input placeholder="Confirm Password" value={this.state.confirmPassword} onChange={event => this.submitconfirmPassword(event)}/>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Login;
import React from 'react';

class Login extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmation: ''
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    ///originally listed a change event for each state, but watched the video and saw how it was abstracted using handleChange

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.password === this.state.confirmation){
            this.props.changeView('home')
        } else {
            alert('try again')
        }
    }



    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        console.log(this.state)
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input name = "name"  value = {this.state.value} onChange={event => this.handleChange(event)} placeholder="Name"/>
                <input name = "name"  value = {this.state.value} onChange={event => this.handleChange(event)} placeholder="Username"/>
                <input name = "name"  value = {this.state.value} onChange={event => this.handleChange(event)} placeholder="Password"/>
                <input name = "name"  value = {this.state.value} onChange={event => this.handleChange(event)} placeholder="Confirm Password"/>
                <button type="submit"> onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Login;
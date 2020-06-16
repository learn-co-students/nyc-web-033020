import React from "react"

class Login extends React.Component {
    state = {
        //1) TODO: What needs to be represented in state for a fully controlled form?
        name: "",
        username: "",
        password: "",
        confirmation: ""
    }

    //3) TODO: What methods need to be created for a fully controlled form?
    //HINT: Use this to change the view when the form is submitted: this.props.changeView("home")
    // nameChange = event => {
    //     this.setState({name: event.target.value})
    // }

    // usernameChange = event => {
    //     this.setState({username: event.target.value})
    // }

    // passwordChange = event => {
    //     this.setState({password: event.target.value})
    // }

    // confirmationChange = event => {
    //     this.setState({confirmation: event.target.value})
    // }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     if(this.state.password === this.state.confirmation) {
    //         this.props.changeView("home")
    //     } else {
    //         alert("Incorrect password! Please try again.")
    //     }
    // }

    //1 method version to do all handle changes: relies on 1) name attributes on each of the inputs & 2) dynamic keys
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        console.log(this.state)
        //2) TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <input name="confirmation" value={this.state.confirmation} onChange={this.handleChange} placeholder="Confirm Password"/>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Login
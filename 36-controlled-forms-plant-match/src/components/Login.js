import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?

        name: '',
        username: '',
        password: '',
        passwordConfirm: ''
    }
    // TODO: What methods need to be created for a fully controlled form?

    // nameChange = e => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // usernameChange = e => {
    //     this.setState({
    //         username: e.target.value
    //     })
    // }

    // passwordChange = e => {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }

    // passwordConfirmChange = e => {
    //     this.setState({
    //         passwordConfirm: e.target.value
    //     })
    // }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.password === this.state.passwordConfirm) {
            this.props.changeView('home')
            this.props.changeUsername(this.state.username)
        } else {
            alert("Sorry your passwords did not match")
        }
        
        
    }

    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // console.log(this.state)
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form onSubmit={e => this.handleSubmit(e)} className="vertical-flex">
                <h2>Create an Account</h2>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                <input name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <input name="passwordConfirm" type="password" value={this.state.passwordConfirm} onChange={this.handleChange} placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
import React from 'react';

class Login extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
        confirm: "",
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    onChange = (event) => {
        event.persist()
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        this.props.changeView('home')
        if (this.state.username) this.props.changeUsername(this.state.username)
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={this.onSubmit}>
                <h2>Create an Account</h2>
                <input name="name" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
                <input name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
                <input name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                <input name="confirm" placeholder="Confirm Password" value={this.state.confirm} onChange={this.onChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
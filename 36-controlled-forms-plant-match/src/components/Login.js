import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
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
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onChange={this.onChange} onSubmit={this.onSubmit}>
                <h2>Create an Account</h2>
                <input name="name" placeholder="Name"/>
                <input name="username" placeholder="Username"/>
                <input name="password" placeholder="Password"/>
                <input name="confirm" placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
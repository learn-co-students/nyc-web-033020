import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: null,
        username: null,
        password: null,
        passconfirm: null
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    handleSubmit = (e) => {
      e.preventDefault()
      // console.log(e.target.name.value)
      this.props.changeView('home', e.target.name.value)
    };

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h2>Create an Account</h2>
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="password" name="passconfirm" placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
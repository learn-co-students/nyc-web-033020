import React from 'react';

class Login extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')
    

   handleOnChange = (event) => {
       this.setState({[event.target.name]: event.target.value})
       console.log(this.state)
   }

   handleSubmit = (event) => {
       event.preventDefault()
       if (this.state.password == this.state.confirmPassword){
           this.props.changeView('home')
       } else {
       alert("NOT A MATCH")
       }
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input onChange={this.handleOnChange} placeholder="Name" name='name' value={this.state.name} />
                <input onChange={this.handleOnChange} placeholder="Username" name='username' value={this.state.username} />
                <input onChange={this.handleOnChange} placeholder="Password" name='password' value={this.state.password}/>
                <input onChange={this.handleOnChange} placeholder="Confirm Password" name='confirmPassword' value={this.state.confirmPassword}/>
                <button onClick={this.handleSubmit} type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
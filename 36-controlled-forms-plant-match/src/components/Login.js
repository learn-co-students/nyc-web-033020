import React from 'react';

class Login extends React.Component {
    state = {
        name :'',
        username : '',
        password : '',
        confirmation : ''
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')
    inputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }
    logInHandler = e =>{
        if(this.state.password === this.state.confirmation){
            this.props.changeView('home')
        }else{
            alert("sorry, your password not match")
        }

    }
    render(){
        console.log(this.state)
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={this.logInHandler}> 
                <h2>Create an Account</h2>
                <input placeholder="Name" name="name" value={this.state.name} onChange={this.inputChange}/>
                <input placeholder="Username" name="username" value={this.state.username} onChange={this.inputChange}/>
                <input placeholder="Password" name="password" value={this.state.password} onChange={this.inputChange}/>
                <input placeholder="Confirm Password" name="confirmation" value={this.state.confirmation} onChange={this.inputChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
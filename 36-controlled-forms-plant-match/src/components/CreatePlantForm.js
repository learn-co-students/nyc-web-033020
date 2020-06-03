import React from 'react';

const API_BASE = 'http://localhost:3001/plants'

class CreatePlantForm extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        Common_Name: '',
        Scientific_Name: '',
        img_name: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(API_BASE, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                Common_Name: this.state.Common_Name,
                Scientific_Name: this.state.Scientific_Name,
                img_name: this.state.img_name
            })
        })
            .then(resp => resp.json())
            .then(data => console.log(data.Common_Name))
            .then(() => this.props.plants())
    }

    // TODO: What methods need to be created for a fully controlled form?

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?

        return (
            <form onSubmit={this.handleSubmit} className="vertical-flex">
                <h4>Submit a New Plant</h4>
                <input onChange={this.handleChange} name="Common_Name" placeholder="Common Name"/>
                <input onChange={this.handleChange} name="Scientific_Name" placeholder="Scientific Name"/>
                <input onChange={this.handleChange} name="img_name"placeholder="Image"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreatePlantForm;
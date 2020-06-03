import React from 'react';

const API_BASE = 'http://localhost:3001/plants'

class CreatePlantForm extends React.Component {
    state = {
        Common_Name: "",
        Scientific_Name: "",
        img_name: "",
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    // TODO: What methods need to be created for a fully controlled form?
    onChange = (event) => {
        event.persist()
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(plant => this.props.addPlant(plant))
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?

        return (
            <form className="vertical-flex" onSubmit={this.onSubmit}>
                <h4>Submit a New Plant</h4>
                <input name="Common_Name" placeholder="Common Name" value={this.state.Common_Name} onChange={this.onChange}/>
                <input name="Scientific_Name" placeholder="Scientific Name" value={this.state.Scientific_Name} onChange={this.onChange}/>
                <input name="img_name" placeholder="Image" value={this.state.img_name} onChange={this.onChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreatePlantForm;
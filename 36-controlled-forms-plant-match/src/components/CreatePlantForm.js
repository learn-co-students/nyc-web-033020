import React from 'react';

const API_BASE = 'http://localhost:3001/plants'

// IF YOU HAVE TO HAVE A BLANK MULTIPLE PLACES LIKE THE DEFAULT AND RESETTING AFTER SUBMIT
// YOU CAN CREATE A CONST AND USE IT IN BOTH PLACES TO DRY OUT YOUR CODE 
const initialState = { Common_Name: '', Scientific_Name: '', img_name: '' }

class CreatePlantForm extends React.Component {
    state = initialState


    // NOT DRY , NOT AWESOME
    // handleCommonNameChange = event => this.setState({ Common_Name: event.target.value })

    // handleScienceNameChange = e => this.setState({ Scientific_Name: e.target.value })

    // handleImgChange = e => this.setState({ img_name: e.target.value })

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state) // only when this.state holds only and exactly the info you need to post 
        })
            .then(res => res.json())
            .then(newPlant => {
                this.props.addNewPlant(newPlant)
                this.setState(initialState)
            })
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        console.log(this.state)
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h4>Submit a New Plant</h4>
                <input onChange={this.handleChange} value={this.state.Common_Name} name="Common_Name" placeholder="Common Name"/>
                <input onChange={this.handleChange} value={this.state.Scientific_Name} name="Scientific_Name" placeholder="Scientific Name"/>
                <input onChange={this.handleChange} value={this.state.img_name} name="img_name"placeholder="Image"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreatePlantForm;
import React from 'react';

const API_BASE = 'http://localhost:3001/plants'
const initialState = { Common_Name: '', Scientific_Name: '', img_name: '' }
class CreatePlantForm extends React.Component {
    // state = {
    //     Common_Name: '',
    //     Scientific_Name: '',
    //     img_name : '',
    // }

    state = initialState
    changeName = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createPlant = e =>{
        e.preventDefault()
        fetch(API_BASE,{
            method: "POST",
            headers: {
                accept:"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(r=>r.json())
        .then(newPlant => {
            this.props.addNewPlant(newPlant)
            this.setState(initialState)
        })
        
    }
    // TODO: What methods need to be created for a fully controlled form?

    render(){

        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        // console.log(this.state)
        return (
            <form className="vertical-flex" >
                <h4>Submit a New Plant</h4>
                <input name="Common_Name" placeholder="Common Name" onChange={this.changeName} value={this.state.Common_Name}/>
                <input name="Scientific_Name" placeholder="Scientific Name" onChange={this.changeName} value={this.state.Scientific_Name}/>
                <input name="img_name"placeholder="Image" onChange={this.changeName} value={this.state.img_name}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreatePlantForm;
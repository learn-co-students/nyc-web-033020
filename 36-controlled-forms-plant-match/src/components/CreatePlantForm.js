import React from 'react';

const API_BASE = 'http://localhost:3001/plants'

class CreatePlantForm extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    // TODO: What methods need to be created for a fully controlled form?

    handleSubmit = (e) => {
      e.preventDefault()
      // console.log(e.target.Common_Name.value)
      fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Common_Name: e.target.Common_Name.value,
          Scientific_Name: e.target.Scientific_Name.value,
          img_name: e.target.img_name.value
        })
      })
      .then(resp => resp.json())
      .then(plant => {
        this.props.updatePlants(plant)
      })
      alert("Plant Submitted")
      e.target.reset()
    };

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?

        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h4>Submit a New Plant</h4>
                <input name="Common_Name" placeholder="Common Name"/>
                <input name="Scientific_Name" placeholder="Scientific Name"/>
                <input name="img_name"placeholder="Image"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreatePlantForm;
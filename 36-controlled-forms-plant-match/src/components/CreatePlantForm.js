import React from 'react';

const API_BASE = 'http://localhost:3001/plants'

class CreatePlantForm extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    // TODO: What methods need to be created for a fully controlled form?

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?

        return (
            <form className="vertical-flex">
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
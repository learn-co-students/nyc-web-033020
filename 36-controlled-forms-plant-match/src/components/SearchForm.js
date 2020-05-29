import React from 'react';


/**
 * 
 * 
 * DO
 * NOT 
 * PROCEED
 * 
 * 
 * UNTIL AFTER CORE DELIVERABLES
 * 
 * 
 * 
 * 
 * 
 */


 
class SearchForm extends React.Component {
    state = {
        showForm: false
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    renderPetOptions = () => {
        return (
            <>
                <label>
                    Cat(s)
                    <input
                        name="toxic_cats"
                        type="checkbox" />
                </label>
                <label>
                    Dog(s)
                    <input
                        name="toxic_dogs"
                        type="checkbox" />
                </label>
            </>
        )
    }

    renderAdditionalOptions = () => {
        return (
            <>
                <label>
                    Hanging Plants
                    <input
                        name="hanging"
                        type="checkbox"
                        checked={this.state.hanging}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Indoor Flowering
                    <input
                        name="indoor_flowering"
                        type="checkbox"
                        checked={this.state.indoor_flowering}
                        onChange={this.handleInputChange} />
                </label>
            </>
        )
    }

    render(){
        return (
            this.state.showForm
            ? <form className="vertical-flex">
                Search for Plants
                <input placeholder="Plant Name"/>
                {this.renderPetOptions()}
                {this.renderAdditionalOptions()}
                <button type="submit">Submit</button>
                <button onClick={this.toggleForm}>Close Form</button>
            </form>
            : <button onClick={this.toggleForm}>Show Search Form</button>
        )
    }
}

export default SearchForm;
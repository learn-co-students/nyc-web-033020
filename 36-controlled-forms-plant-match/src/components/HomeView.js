import React from 'react';
import MatchContainer from './MatchContainer';
import CreatePlantForm from './CreatePlantForm';

const API_BASE = 'http://localhost:3001/plants'

class HomeView extends React.Component {
    state = {
        plants: [],
        showCreateForm: false,
        search: ""
    }

    /** DO NOT WORRY ABOUT THIS COMPONENTDIDMOUNT METHOD
     * It's part of content we'll learn on FRIDAY of WEEK ONE
    */
    componentDidMount(){
        fetch(API_BASE)
            .then(res => res.json())
            .then(plants => this.setState({ plants }))
    }

    toggleCreateForm = () => this.setState({ showCreateForm: !this.state.showCreateForm })


    filterPlants = (plants) => plants.filter(plant => plant['Common_Name'].toLowerCase().includes(this.state.search))

    /**
     * TODO: ONLY FOR ADVANCED DELIVERABLES
     * Once you post a new plant, you'll need to update the plants on state here.
     * Define a method that can add a new plant into the plants array.
     */

    render(){
        const { plants, showCreateForm } = this.state
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?

        return (
            <div>
                <button onClick={this.toggleCreateForm}>{showCreateForm ? "Hide Form" : "Submit Plant"}</button>
                { showCreateForm && <CreatePlantForm />}
                <hr />
                <div>
                    <input placeholder="Search for Plants" onChange={(event) => this.setState({search: event.target.value})}/>
                </div>
                <MatchContainer plants={this.filterPlants(this.state.plants)}/>
            </div>
        )
    }
}

export default HomeView;
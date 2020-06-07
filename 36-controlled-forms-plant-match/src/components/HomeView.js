import React from 'react';
import MatchContainer from './MatchContainer';
import CreatePlantForm from './CreatePlantForm';

const API_BASE = 'http://localhost:3001/plants'

class HomeView extends React.Component {
    state = {
        plants: [],
        showPlants: [],
        showCreateForm: false,
    }

    /** DO NOT WORRY ABOUT THIS COMPONENTDIDMOUNT METHOD
     * It's part of content we'll learn on FRIDAY of WEEK ONE
    */
    componentDidMount(){
      fetch(API_BASE)
        .then(res => res.json())
        .then(plants => {
          this.setState({ plants })
          this.setState({ 
            showPlants: plants 
          })
        })
      
    }

    toggleCreateForm = () => this.setState({ showCreateForm: !this.state.showCreateForm })


    /**
     * TODO: ONLY FOR ADVANCED DELIVERABLES
     * Once you post a new plant, you'll need to update the plants on state here.
     * Define a method that can add a new plant into the plants array.
     */

    handleChange = (e) => {
      
      const value = e.target.value
      const plants = this.state.plants
      const filteredPlants = plants.filter(plant => {
        return plant.Common_Name.toLowerCase().includes(value)
      })
      if(filteredPlants.length > 0){
        this.setState({
          showPlants: filteredPlants
        });
      } 

      // if (filteredPlants){
      //   this.setState({
      //     plants: filteredPlants
      //   });
      // } else {
      //   this.setState({
      //     plants: plants
      //   });
      // }
      
    };

    render(){
        const { showPlants, showCreateForm } = this.state
        // console.log(plants)
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?

       


        return (
            <div>
                <button onClick={this.toggleCreateForm}>{showCreateForm ? "Hide Form" : "Submit Plant"}</button>
                { showCreateForm && <CreatePlantForm />}
                <hr />
                <div>
                    <input onChange={this.handleChange} name="plantsearch" placeholder="Search for Plants"/>
                </div>
                <MatchContainer plants={showPlants}/>
            </div>
        )
    }
}

export default HomeView;
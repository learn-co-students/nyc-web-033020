import React from 'react';
import PetProfile from './PetProfile';
import PetCard from './PetCard';

const API = 'http://localhost:7001/cats'

class PetIndex extends React.Component {
    state = {
        pets: []
    }

    componentDidMount(){
        fetch(API).then(res => res.json()).then(pets => this.setState({ pets }))
    }
    render(){
        return (
            <div className="index-page">
                <h3>!! All of Our Pets !!</h3>
                <div className="simple-flex-row index-wrap">
                    {this.state.pets.map(pet => <PetCard key={pet.id} {...pet} />)}
                </div>
            </div>
        )
    }

}

export default PetIndex;
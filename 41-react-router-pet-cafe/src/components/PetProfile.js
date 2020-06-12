import React from 'react';

const API = 'http://localhost:7001/cats'


class PetProfile extends React.Component {
    state = {
        pet: null
    }

    componentDidMount() {
        console.log('profile props', this.props)
        /** TODO: Make this dynamic! Use the id param of the URL to fetch the correct cat!  */
        fetch(`${API}/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(pet => this.setState({ pet }))
    }

    renderPet = () => {
        const { image, name, happiness, description, isAdopted } = this.state.pet;
        return (
            
                <div className="pet-page">
                    <img className="page-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
                    <div className="page-info">
                        <h2>{name}</h2>
                        <div>How's {name} doing today? {happiness > 0 ? '❤️'.repeat(happiness) : '😿'}</div>
                        <div><b>{name}</b> says {description}</div>
                        <div className={isAdopted ? '' : 'highlight'}>{isAdopted ? 'No Longer up for Adoption' : 'Up for Adoption!'}</div>
                    </div>
                    <div>
                        <div>⬅️</div>
                        <div>➡️</div>
                        <button onClick={this.props.history.goBack}>Go Back</button>
                    </div>
                </div>
                

        )
    }

    render(){
        return this.state.pet ? this.renderPet() : <div> No Pet Selected... Try going back to our Pets! </div>
    }
}

export default PetProfile;
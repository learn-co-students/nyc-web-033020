import React from 'react';

class PlantCard extends React.Component {
    state = { 
        details: false
    }

    toggleDetails = () => {
        this.setState({ details: !this.state.details })
    }

    renderFront = () => {
        const { img_name, Common_Name } = this.props;
        /** Image conditionally renders. If the file ends in .png it is a local file, otherwise use the url */
        return (
            <>
                <img className="card-img" src={img_name.endsWith('.png') ? `/imgs/${img_name}` : img_name} alt={Common_Name} />
                <div>{Common_Name}</div>
            </>
        )
    }

    renderBack = () => {
        const { Common_Name, Scientific_Name, Toxic_Dogs, Toxic_Cats, 
            indoor_flowering, hanging, Sunlight, Plant_Height, Plant_Spread } = this.props;
        return (
            <>
                <h5>{Common_Name}</h5>
                <div className="card-back-text">{Scientific_Name}</div>
                <div className="card-back-text">{Toxic_Cats 
                        ? Toxic_Dogs 
                            ? 'Not Good for Pets'
                            : 'Not Good for Cats'
                        : Toxic_Dogs
                            ? 'Not Good for Dogs'
                            : 'Good for Cats and Dogs'
                }</div>
                <div className="card-back-text">{indoor_flowering ? 'Flowers Indoors' : 'Floors Outside'}</div>
                <div className="card-back-text">{hanging ? "Hanging" : 'Not a Hanging Plant'}</div>
                <div className="card-back-text">{Sunlight}</div>
                <div className="card-back-text">Height: {Plant_Height}</div>
                <div className="card-back-text">Spread: {Plant_Spread}</div>
            </>
        )

    }
    render(){
        const { details } = this.state;
        return (
            <div className="plant-card" onClick={this.toggleDetails}>
                {details ? this.renderBack() : this.renderFront()}
            </div>
        )
    }
}

export default PlantCard;
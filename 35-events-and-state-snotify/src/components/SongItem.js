import React from 'react';

class SongItem extends React.Component {
    // OLD SCHOOL 
    // constructor() {
    //     super();
    //     this.state = {
    //         likes: 0 
    //     }
    //      // used to bind our methods to the instance here
    //     this.increaseLikes = this.increaseLikes.bind(this)
    // }

    // ES6 syntax 
    state = {
        likes: 0
    }

    increaseLikes = (event) => {
        // if you need the info from the event well into callback invocation 
        // option 1
        // event.persist()

        // option 2
        let clientX = event.clientX


        setTimeout(() => console.log('using the event: ', event.clientX, '  using the variable: ', clientX), 2000)
        this.setState({ likes: this.state.likes + 1 })
    }

    render(){
        // console.log(this.props)
        // access id and favorites?
        console.log(this.props.id, this.props.favorite)
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.artist}</td>
                <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
                <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                <td onClick={() => this.props.updateFavorite(this.props.id, this.props.favorite)}>{this.props.favorite ? "💚" : "♡"}</td>
                <td onClick={this.increaseLikes}>Likes: {this.state.likes}</td>
            </tr>
        )
    }
}

export default SongItem;
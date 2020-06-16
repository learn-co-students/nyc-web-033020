import React from 'react'

class SongItem extends React.Component { 
    // constructor() {
    //     super()
    //     this.state = {
    //         likes: 0
    //     }
    // }

    //same as constructor method
    state = {
        likes: 0
    }

    increaseLikes = event => {
        console.log(event.clientX)
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render () {
        // console.log(this.props)
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.artist}</td>
                <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
                <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                <td onClick={() => this.props.updateFavorite(this.props.id, this.props.favorite)/* Put your click handler here */}>{this.props.favorite ? "💚" : "♡"}</td>
            <td onClick={this.increaseLikes}>Likes: {this.state.likes}</td>
            </tr> 
        )
    }
}

export default SongItem
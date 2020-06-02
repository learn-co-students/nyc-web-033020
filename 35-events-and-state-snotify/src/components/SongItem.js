import React from 'react';

class SongItem extends React.Component {

  state = {
    likes: 0
  }

  increaseLikes = () => {
    this.setState({ likes: this.state.likes + 1}) 
  }

  render(){
    return (
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={null /* Put your click handler here */}>{this.props.favorite ? "💚" : "♡"}</td>
            <td onClick={this.increaseLikes}>Likes: {this.state.likes}</td>
        </tr>
    )
  } 
}

export default SongItem;
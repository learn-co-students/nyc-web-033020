import React from 'react';

class SongItem extends React.Component{
    state = {
        likes:0
    }

    updateLikes = () => {
        this.setState({likes:this.state.likes+1})
    }
    render(){
        return (
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={null/*updateFav*/}>{this.props.favorite ? "💚" : "♡"}</td>
            <td onClick={this.updateLikes}>{this.state.likes}</td>
        </tr>
        )
    }
}
export default SongItem;
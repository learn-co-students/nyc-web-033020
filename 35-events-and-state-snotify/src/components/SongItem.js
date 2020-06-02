import React, { Component } from 'react';

    class SongItem extends Component {
        state = {  
            likes: 0,
        }
        
        likeHandler = () => {
           let currentLikes = this.state.likes 
           let newLikes = currentLikes + 1
            this.setState({likes: newLikes})
        }
        
        
        render() { 
            return (
                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.artist}</td>
                    <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
                    <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                    <td onClick={() => this.props.faved(this.props.id, !this.props.favorite) /* Put your click handler here */}>{this.props.favorite ? "💚" : "♡"}</td>
                    <td onClick={this.likeHandler}>Likes: {this.state.likes}</td>
                </tr>
            )
        }
    }
     
    

    export default SongItem;
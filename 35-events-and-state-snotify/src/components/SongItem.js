import React from 'react';

const SongItem = props => {
    
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={console.log(this.state)}>Play Now</button></td>
            <td><button onClick={console.log(this.state)}>Add to Queue</button></td>
            <td onClick={console.log(this.state)}>{props.favorite ? "💚" : "♡"}</td>
            <td>Likes: 0</td>
        </tr>
    )
}

export default SongItem;
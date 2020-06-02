import React from 'react';

const SongItem = props => {
    const {id, title, artist, url, genre, favorite} = props

    const playNow = (event) =>{
        console.log(event.target)
    }
    
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={this.playNow}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={null /* Put your click handler here */}>{props.favorite ? "💚" : "♡"}</td>
            <td>Likes: 0</td>
        </tr>
    )
}

export default SongItem;
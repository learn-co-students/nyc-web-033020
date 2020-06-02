import React from 'react';

//class SongItem extends React.Component {

    const playNow = () => {
        {console.log('clicked')}
    }
    
    const addToQueue = () => {
        {console.log('clicked')}
    }

const SongItem = props => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={props.playNow}>Play Now</button></td>
            <td><button onClick={props.addToQueue}>Add to Queue</button></td>
            <td onClick={props.fave}>{props.favorite ? "💚" : "♡"}</td>
            <td>Likes: 0</td>
        </tr>
        )
    }
//}
export default SongItem;

import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem.js'



const SongList = props => {
    return (
        <div className="half songlist">
            <h2>Song List</h2>
            <Filter changeGenre={props.changeGenre} favs={props.favs}/>
            <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Artists</td>
                            <td>Play?</td>
                            <td>Queue?</td>
                            <td>Favorite</td>
                            <td>Likes</td>
                        </tr>
                    </thead>
                    <tbody>
                        { props.songs.map(song => <SongItem key={song.id} {...song} handleFavorite={props.handleFavorite} nextSong={props.nextSong} playInQueue={props.playInQueue}/>)}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;
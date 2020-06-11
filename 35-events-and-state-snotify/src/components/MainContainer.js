import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    const {songs,updateFav,renderUrl,listSongs, currentSong, queues, deleteSong} = props
    return (
        <div className="simple-flex-row top">
            <SongList songs = {songs} updateFav={updateFav} renderUrl={renderUrl} listSongs={listSongs} queues={queues}/> 
            <Queue currentSong={currentSong} queues={queues} deleteSong={deleteSong}/> 
        </div>
    )
}

export default MainContainer;
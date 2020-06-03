import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {

    return (
        <div className="simple-flex-row top">
            <SongList songs = {props.songs} updateFav={props.updateFav} renderUrl={props.renderUrl}/> 
            <Queue song={props.currentSong}/> 
        </div>
    )
}

export default MainContainer;
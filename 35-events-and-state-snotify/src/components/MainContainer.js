import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    return (
        <div className="simple-flex-row top">
            <SongList faved={props.faved}songs={props.songs} queueSong={props.queueSong} playSong={props.playSong}/> {/** TODO: What props do I need? */}
            <Queue queuedSongs={props.queuedSongs} currentSong={props.currentSong}/> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;
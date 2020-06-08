import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    return (
        <div className="simple-flex-row top">
            <SongList nextSong={props.nextSong} playInQueue={props.playInQueue} songs={props.songs} changeGenre={props.changeGenre} favs={props.favs}  handleFavorite={props.handleFavorite}/>{/** TODO: What props do I need? */}
            <Queue playInQueue={props.playInQueue} songForQ={props.songForQ}  next={props.next}/> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;
import React from 'react';
import SongList from './SongList';
import Queue from './Queue';
let API_ENDPOINT = `http://localhost:6001/songs`
const MainContainer = props => {

   
    return (
        <div className="simple-flex-row top">
            <SongList songs = {props.songs} updateFav={props.updateFav}/> 
          
            <Queue songs = {props.songs} showSong={props.showSong}/> 
        </div>
    )
}

export default MainContainer;
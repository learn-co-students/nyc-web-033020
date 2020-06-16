import React from 'react'
import SongList from './SongList'
import Queue from './Queue'

const MainContainer = props => {
    return (
        <div className="simple-flex-row top">
            <SongList songs={props.songs} updateFavorite={props.updateFavorite} /> {/** TODO: What props do you need? */}
            <Queue /> {/** TODO: What props do you need? */}
        </div>
    )
}

export default MainContainer
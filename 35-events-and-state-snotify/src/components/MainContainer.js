import React from 'react';
import SongList from './SongList';
import Queue from './Queue';
import SongItem from './SongItem';

const MainContainer = props => {
    return (
        <div className="simple-flex-row top">
            <SongList />{ }
            <Queue /> {/** TODO: What props do I need? */}
            <SongItem />
        </div>
    )
}

export default MainContainer;
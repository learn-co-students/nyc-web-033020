import React from 'react';
import SongList from './SongList';
import Queue from './Queue';
import { render } from '@testing-library/react';

const MainContainer = props => {
    
    console.log(props.songList)
    return (
        
        <div className="simple-flex-row top">
            <SongList /> {/** TODO: What props do I need? */}
            <Queue /> {/** TODO: What props do I need? */}
        </div>
    )
  
}

export default MainContainer;
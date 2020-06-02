import React from 'react';
import Filter from './Filter';

renderSong = (data) => {
    data.map(song => {<SongList title={song.title} artist={song.artist}/>})
}

const SongList = props => {
    return (
        <div className="half songlist">
            <h2>Song List</h2>
            <Filter />
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
                        {/** TODO: Render a SongItem component per each song here*/
                        SongList.map
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;
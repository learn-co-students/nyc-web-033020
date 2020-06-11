import React from 'react';
import Filter from './Filter';
import SongItem from'./SongItem';

class SongList extends React.Component{
    state = {
        favorite : 'all',
        genre : 'all'
    }
    handleFavoritesChange = e => {
        this.setState({ favorite: e.target.value })
    }
    handleGenreChange = e => {
        this.setState({ genre: e.target.value })
    }
    

    render(){
    const {songs, updateFav, renderUrl,listSongs,queues} = this.props
    const {genre,favorite} = this.state
    let songsToRender = songs
       

        if(favorite === "favorite"){
            songsToRender = songs.filter(song=>song.favorite)
        }else if(genre === "Pop"){
            songsToRender = songs.filter(song=>song.genre==="Pop")
        }else if(genre === "Hip Hop"){
            songsToRender = songs.filter(song=>song.genre==="Hip Hop")
        }else if(genre === "R&B"){
            songsToRender = songs.filter(song=>song.genre==="R&B")
        }
        return (
            <div className="half songlist">
                <h2>Song List</h2>

                <Filter 
                genre={genre}
                favorite={favorite} 
                handleFavoritesChange={this.handleFavoritesChange}
                handleGenreChange={this.handleGenreChange}
                />

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
                            {songsToRender.map(song => <SongItem
                            key={song.id}
                            {...song}
                            updateFav={updateFav}
                            renderUrl={renderUrl}
                            listSongs={listSongs}
                            queues ={queues}
                            />)}
                        
                        </tbody>
                </table>
            </div>
        )
    }  

}

export default SongList;
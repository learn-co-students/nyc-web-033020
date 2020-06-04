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

       
        let songsToRender = this.props.songs
        if(this.state.favorite === "favorite"){
            songsToRender = this.props.songs.filter(song=>song.favorite)
        }else if(this.state.genre === "Pop"){
            songsToRender = this.props.songs.filter(song=>song.genre==="Pop")
        }else if(this.state.genre === "Hip Hop"){
            songsToRender = this.props.songs.filter(song=>song.genre==="Hip Hop")
        }else if(this.state.genre === "R&B"){
            songsToRender = this.props.songs.filter(song=>song.genre==="R&B")
        }
        return (
            <div className="half songlist">
                <h2>Song List</h2>

                <Filter 
                genre={this.state.genre}
                favorite={this.state.favorite} 
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
                            updateFav={this.props.updateFav}
                            renderUrl={this.props.renderUrl}
                            />)}
                        
                        </tbody>
                </table>
            </div>
        )
    }  

}

export default SongList;
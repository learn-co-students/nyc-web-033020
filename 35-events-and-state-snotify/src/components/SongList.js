import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem';

class SongList extends React.Component{
    state = {
        genre: 'all',
        favorites: 'all'
    }

    handleFavoritesChange = e => {
        this.setState({ favorites: e.target.value })
    }

    render() {
        let songsToRender = this.props.songs 
        if(this.state.favorites === 'favorites'){
            songsToRender = this.props.songs.filter( song => song.favorite )
        }

        return (
            <div className="half songlist">
                <h2>Song List</h2>
                <Filter 
                    genre={this.state.genre} 
                    favorites={this.state.favorites}  
                    handleFavoritesChange={this.handleFavoritesChange}/>
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
                            { songsToRender.map(song => <SongItem {...song} updateFavorite={this.props.updateFavorite}/>)
                            /** TODO: Render a SongItem component per each song here*/}
                        </tbody>
                </table>
            </div>
        )
    }
}

export default SongList;
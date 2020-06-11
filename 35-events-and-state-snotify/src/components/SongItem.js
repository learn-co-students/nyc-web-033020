import React from 'react';

class SongItem extends React.Component{
    state = {
        likes:0
    }

    
    updateLikes = () => {
        this.setState({likes:this.state.likes+1})
    }
    render(){
        const {renderUrl,listSongs,updateFav,title,artist,id,favorite,queues}=this.props
        return (
        <tr>
            <td>{title}</td>
            <td>{artist}</td>
            <td><button onClick={()=> renderUrl(this.props)}>Play Now</button></td>
            <td><button onClick={()=> listSongs(this.props)}>Add to Queue</button></td>

            <td onClick={()=> updateFav(id, favorite)}>{favorite ? "💚" : "♡"}</td>
            <td onClick={this.updateLikes}>{this.state.likes}</td>
        </tr>
        )
    }
}
export default SongItem;
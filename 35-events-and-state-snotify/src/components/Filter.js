import React from 'react';

const Filter = props => {

    return (
        <div className="simple-flex-row">
            <label> Genre: 
                <select value={props.genre} onChange={props.handleGenreChange}>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Pop">Pop</option>
                    <option value="R&B">R&B</option>
                </select>
            </label>
            <label> Favorites? 
                <select value={props.favorite} onChange={props.handleFavoritesChange} >
                    <option value="All"> All</option>
                    <option value="favorite">Just Favs</option>
                </select>
            </label>
        </div>
    )
}





export default Filter;
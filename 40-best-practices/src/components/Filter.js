import React from 'react';

const Filter = props => {
    return (
        <div className="simple-flex-row">
            <label> Genre: 
                <select>
                    <option>Hip Hop</option>
                    <option>Pop</option>
                    <option>R&B</option>
                </select>
            </label>
            <label> Favorites? 
                <select>
                    <option>All</option>
                    <option>Just Favs</option>
                </select>
            </label>
        </div>
    )
}

export default Filter;
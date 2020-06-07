import React from 'react';

const Filter = props => {
    return (
        <div className="simple-flex-row">
            <label> Genre: 
                <select onChange={props.changeGenre}>
                    <option value=''>All</option>
                    <option value='Hip Hop'>Hip Hop</option>
                    <option value='Pop'>Pop</option>
                    <option value='Salsa'>Salsa</option>
                </select>
            </label>
            <label> Favorites? 
                <select onChange={props.favs}>
                    <option>All</option>
                    <option>Just Favs</option>
                </select>
            </label>
        </div>
    )
}

export default Filter;
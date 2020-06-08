import React from 'react';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <input value={props.search} onChange={props.handleSearch} placeholder="Search by title or author..."/>
        </div>
    )
}

export default SearchBar;
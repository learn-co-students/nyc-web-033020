import React from 'react';

const Nav = props => {
    return (
        <div className="simple-flex-row nav">
            <h1 className="icon">Slackiron</h1>
            <div>
                <button className="nav-arrow">←</button>
                <button className="nav-arrow">→</button>
            </div>
            <div className="nav-icon">🕐</div>
            <input placeholder="Search term..." />
            <div className="nav-icon">⍰</div>
        </div>
    )
}

export default Nav;
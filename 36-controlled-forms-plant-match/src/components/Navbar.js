import React from 'react';

const Navbar = props => {
    const { view, changeView, username } = props;
    return (
        <div className="simple-flex-row top">
            {username 
            ? <span onClick={() => changeView('home')}> Welcome to Plant 🌱 Match, {username} </span>
            :  <span onClick={() => changeView('home')}> Plant 🌱 Match </span>
            }
            <span className={view === 'login' ? 'btn active' : 'btn inactive'} onClick={() => changeView('login')}>Login</span>
        </div>
    )
}

export default Navbar;
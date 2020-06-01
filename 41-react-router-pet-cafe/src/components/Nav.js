import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    /**
     * TODO:
     * For each div below, decide if it should navigate the user to a specific page
     * Then, use the tools from React Router so when the user clicks on the text, it navigates them to that path
     */
    return (
        <div className="simple-flex-row">
            <div>🐰🐱🐶🐹☕️🍵</div>
            <div>Home</div>
            <div>Pets</div>
            <div className="simple-flex-row right-corner">
                <div>Login</div>
                <div>?</div>
            </div>
        </div>
    )
}

export default Nav;
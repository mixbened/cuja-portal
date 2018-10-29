import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
     return <nav>
        <a href='/'><div id='logo'/></a>
        <ul>
            <Link to='/'><li>Portal</li></Link>
            <Link to='/catalog'><li>Catalog</li></Link>
            <Link to='/profile'><li>My Profile</li></Link>
        </ul>
    </nav>
}

export default Nav;
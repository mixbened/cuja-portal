import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <div className='header'>
                <h1>{props.title}</h1>
                <h5>{props.subHeading}</h5>
                <Link to={`/${props.url}`}><button>{props.button}</button></Link>
            </div>
        </div>
    );
};

export default Header;
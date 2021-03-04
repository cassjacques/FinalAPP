import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>TBD</h1>
            <nav>
                <Link to='/'>Home</Link>{' '}
                <Link to='/fits'>Fits</Link>{' '}
                <Link to='/new-fit'>New Fit</Link>
            </nav>
        </header>
    )
};

export default Header;
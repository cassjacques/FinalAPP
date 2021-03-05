import React from 'react';
import { Link } from 'react-router-dom';
import CSS from '../App.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="links">
                <Link to='/'>Home</Link>{' '}
                <Link to='/fits'>Fits</Link>{' '}
                <Link to='/soss'>SOS</Link>{' '}
                <Link to='/new-fit'>New Fit</Link>{' '}
                <Link to='/new-sos'>New SOS</Link>
            </nav>
        </header>
    )
};

export default Header;
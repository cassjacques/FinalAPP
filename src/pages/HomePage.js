import React from 'react';
import { Link } from 'react-router-dom';
// import CSS from '../App.css';

const HomePage = () => {
    return (
        <div className="logo">
            <h1>TBD</h1>
            <div className="homelinks">
                <Link to='/signup'>SignUp</Link>{' '}
                <Link to='/signin'>SignIn</Link>{' '}
            </div>
        </div>
    )
}

export default HomePage;
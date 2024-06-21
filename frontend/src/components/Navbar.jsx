import React from 'react';
import './index.scss'; 

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    {/* TODO home, login, signup, profile, create post, mark as read -> show more -> read one post, login*/}
                    {/* token stored in the localStorage */}
                </ul>
            </nav>
            <div className="header__search">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
        </header>
    );
};

import React from 'react';
import './Header.css'
const Header = (props) => {
    return (
        <div className="header-container">
            <h1>{props.name}</h1>
            <div className="header-border"></div>
        </div>
    );
};

export default Header;
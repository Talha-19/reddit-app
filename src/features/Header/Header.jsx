import React from "react";
import './Header.css'
import { FaReddit, FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
        <div className="logo">
          <FaReddit className="logo-icon" />
          <p>
            Reddit<span>Minimal</span>
          </p>
        </div>
        <div className="search-bar"> 
          <input type="text" placeholder="Search"/>
          <FaSearch className="search-icon"/>
        </div>
</header>)}

export default Header

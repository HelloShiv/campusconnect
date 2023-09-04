import React from "react";
import "../styles/navbar.css";

function Navbar(){
    return  <nav className="navbar">
    <div className="navbar-container container">
        <input type="checkbox" name="" id=""/>
        <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <ul className="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/LostAndFound">Lost&Found</a></li>
            <li><a href="/Marketplace">Marketplace</a></li>
            <li><a href="/Query">Query</a></li>
            <li><a href="/Login">Login</a></li>
        </ul>
        <h1 className="logo">CampusConnect</h1>
    </div>
</nav>

}

export default Navbar;
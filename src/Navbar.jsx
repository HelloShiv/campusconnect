import React from "react";
import "../src/css/navbar/navbar.css";

function Navbar(){
    return  <nav class="navbar">
    <div class="navbar-container container">
        <input type="checkbox" name="" id=""/>
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/LostAndFound">Lost&Found</a></li>
            <li><a href="/Marketplace">Marketplace</a></li>
            <li><a href="/Query">Query</a></li>
            <li><a href="/Login">Login</a></li>
        </ul>
        <h1 class="logo">CampusConnect</h1>
    </div>
</nav>

}

export default Navbar;
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
            <li><a href="#">Home</a></li>
            <li><a href="#">Lost&Found</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Query</a></li>
            <li><a href="#">Log in</a></li>
            <li><a href="#">Sign in</a></li>
        </ul>
        <h1 class="logo">CampusConnect</h1>
    </div>
</nav>

}

export default Navbar;
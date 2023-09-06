import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { message } from "antd";

function Navbar() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [loggedInState, setLoggedInState] = useState("Log In"); // Default to "Log In"

  useEffect(() => {
    // Use an effect to update the loggedInState when the authentication state changes.
    if (firebase.isLoggedIn) {
      setLoggedInState("Log Out");
    } else {
      setLoggedInState("Log In");
    }
  }, [firebase.isLoggedIn]);

  async function logout() {
    if (firebase.isLoggedIn) {
      try {
        await firebase.SignOut();
        message.success("Logged out successfully");
        console.log("Logged Out");
        navigate("/Login");
        // Display a logout success message using Ant Design message
      } catch (error) {
        message.error("Logout failed");
        console.error("Error signing out:", error);
        // Display a logout error message using Ant Design message
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
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
          <li><a href='/Login' onClick={logout}>{loggedInState}</a></li>
        </ul>
        <h1 className="logo">CampusConnect</h1>
      </div>
    </nav>
  );
}

export default Navbar;

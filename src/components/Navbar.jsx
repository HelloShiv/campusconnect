import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { message  } from "antd";
import {Button} from "antd";

function Navbar() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [loggedInState, setLoggedInState] = useState( <Button type="primary" >
  <h4>LogIn</h4>
</Button>); // Default to "Log In"

  useEffect(() => {
    // Use an effect to update the loggedInState when the authentication state changes.
    if (firebase.isLoggedIn) {
      setLoggedInState(<Button type="primary" danger>
      <h4>LogOut</h4>
    </Button>);
    } else {
      setLoggedInState( <Button type="primary" >
      <h4>LogIn</h4>
    </Button>);
    }
  }, [firebase.isLoggedIn]);

  async function logout() {
    if (firebase.isLoggedIn) {
      try {
        await firebase.SignOut();
        message.success("Logged out successfully");
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
    <nav className="navbar prevent-select">
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
          {(firebase.currentUserEmail === "shiv.21bcon217@jecrcu.edu.in" || firebase.currentUserEmail === "arpit.21bcon225@jecrcu.edu.in") && (
            <li>
              <a href="https://mycampusconnect.jetadmin.io/app/admin_panel_3877/prod/page/listing-of-lostandfounds" target="_blank">
              <Button type="primary" style={{backgroundColor:"#000000" ,color:"#ffffff" ,fontWeight:"bolder"}}>
                Admin Panel
              </Button>
              </a>
            </li>
          )}
          <li><a href='/Login' onClick={logout}>{loggedInState}</a></li>
        </ul>
        <h1 className="logo ">CampusConnect</h1>
      </div>
    </nav>
  );
}

export default Navbar;

  import React, { useEffect, useState } from "react";
  import Search from "../components/Search"
  import MarketplaceItems from "../components/MarketPlaceItems";
  import MarketplaceCard from "../components/MarketPlaceCard";
  import { useFirebase } from "../context/Firebase";
  import { useNavigate } from "react-router-dom";
  import { Button, notification } from "antd";


  function Marketplace(){
    const firebase = useFirebase();
    const navigate = useNavigate();
    console.log(firebase.isLoggedIn);
    const [loginStatus , setLoginStatus] = useState(firebase.isLoggedIn);
    
    useEffect(() => {
      if (firebase.isLoggedIn === false) {
        // Show a notification when not logged in.
        notification.warning({
          message: "Please login first",
          duration: 2, // Duration in seconds for the notification to be displayed
        });
        navigate("/Login");
      }
    }, [firebase.isLoggedIn, navigate]);

    useEffect(() => {
      if (firebase.isEmailVerified === false) {
        // Show a notification when not logged in.
        notification.warning({
          message: "Please Verify the Email",
          duration: 2, // Duration in seconds for the notification to be displayed
        });
        navigate("/Login");
      }
    }, [firebase.isLoggedIn, navigate]);

      return (<>
          <Search placeholder="Seach name the products........"/>
          <MarketplaceCard />
          
          </>
      );
  }

  export default Marketplace;
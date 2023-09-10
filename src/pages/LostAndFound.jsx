import Search from "../components/Search"
import Card from "../components/Card";
import LostPopUp from "../components/LostPopUp";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, notification } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LostAndFound(){
  const firebase = useFirebase();
  const navigate = useNavigate();
 
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
    

    return(<>
    <Navbar />
     <Search placeholder="Seach name the lost item ...."/>
     <LostPopUp />
        <Card />
        <Footer />
        </>
    );
}

export default LostAndFound;
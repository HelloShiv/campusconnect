import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { Button, notification } from "antd";

function Query() {
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

  return (
    <>
      <h1 style={{ paddingTop: "10vh" }}>Welcome to query resolver</h1>
      {/* Add your content for authenticated users here */}
    </>
  );
}

export default Query;

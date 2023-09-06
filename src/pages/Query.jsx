import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";


function Query(){
  const firebase = useFirebase();
  const navigate = useNavigate();
 
  useEffect(() => { 
  if(firebase.isLoggedIn == false){
    navigate('/Login')
  }
  });
  
  console.log(firebase.isLoggedIn);

    return <>
    <h1 style={{paddingTop:"10vh"}}>welcome to query resolver</h1> 
    </>
}

export default Query;
import Search from "../components/Search"
import Card from "../components/Card";
import LostPopUp from "../components/LostPopUp";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LostAndFound(){
  const firebase = useFirebase();
  const navigate = useNavigate();
  useEffect(() => { 
  if(firebase.isLoggedIn == false){
    navigate('/Login')
  }
  });

console.log(firebase.isLoggedIn);
    return(<>
     <Search placeholder="Seach name the lost item ...."/>
     <LostPopUp />
        <Card />
        </>
    );
}

export default LostAndFound;
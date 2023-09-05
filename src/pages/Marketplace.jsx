import React, { useEffect } from "react";
import Search from "../components/Search"
import MarketplaceItems from "../components/MarketPlaceItems";
import MarketplaceCard from "../components/MarketPlaceCard";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";


function Marketplace(){
  const firebase = useFirebase();
  const navigate = useNavigate();
//   useEffect(() => {
//   if(!firebase.isLoggedIn){
//     navigate('/Login')
//   }
//   });

    return (<>
        <Search placeholder="Seach name the products........"/>
        <MarketplaceCard />
        
        </>
    );
}

export default Marketplace;
import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import "../styles/marketplace.css";
import MarketplaceItems from "./MarketPlaceItems";

function MarketplaceCard(props){
 
     const [items, setItems] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
     const firebase = useFirebase();
   
     useEffect(() => {
       firebase.listAllMarketplaceItems()
         .then((querySnapshot) => {
           const itemData = querySnapshot.docs.map((doc) => doc.data());
           setItems(itemData);
           setIsLoading(false);
         })
         .catch((error) => {
           console.error("Error fetching data from Firebase:", error);
           setIsLoading(false);
         });
     }, []);
   
     return (
       <div className="main">
         
           <ul className="cards">
             {items.map((item, index) => (
               <MarketplaceItems key={index} {...item} />
             ))}
           </ul>
         
       </div>
     );

}

export default MarketplaceCard;
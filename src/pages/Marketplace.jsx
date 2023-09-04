import React from "react";
import Search from "../components/Search"
import MarketplaceItems from "../components/MarketPlaceItems";
import MarketplaceCard from "../components/MarketPlaceCard";


function Marketplace(){
    return (<>
        <Search placeholder="Seach name the products........"/>
        <MarketplaceCard />
        
        </>
    );
}

export default Marketplace;
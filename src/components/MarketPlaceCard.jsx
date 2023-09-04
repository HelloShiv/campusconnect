import React from "react";
import "../styles/marketplace.css";
import MarketplaceItems from "./MarketPlaceItems";

function MarketplaceCard(props){
 
  return ( <div className="main">

  <ul className="cards">
    <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
     <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
     <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
      <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
     <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
     <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
      <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
     <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
     <MarketplaceItems  src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/C-Primer-Plus-6th-Edition.jpg"} 
          card_title={"C++ Books"} card_text={"C++ book in good condition and updated version" }/>
  
  </ul>
  </div>
  );

}

export default MarketplaceCard;